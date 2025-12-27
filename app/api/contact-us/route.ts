
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { companyName, email, contactNo, auditType, description } = body;

        // Basic validation
        if (!companyName || !email || !contactNo) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check for required environment variables
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error('Missing required environment variables for email');
            return NextResponse.json(
                { error: 'Server configuration error: Missing email credentials' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Verify connection configuration
        try {
            await transporter.verify();
            console.log('SMTP connection verified');
        } catch (verifyError) {
            console.error('SMTP Connection Verification Failed:', verifyError);
            return NextResponse.json(
                { error: 'SMTP Connection Failed: ' + (verifyError instanceof Error ? verifyError.message : 'Unknown error') },
                { status: 500 }
            );
        }

        // 1. Admin Notification Email Template
        const adminMailOptions = {
            from: `"${companyName}" <${process.env.SMTP_USER}>`, // Shows company name as sender name if possible, or just standard
            to: process.env.CONTACT_EMAIL_TO || process.env.SMTP_USER,
            replyTo: email,
            subject: `New Enquiry: ${companyName} - ${auditType || 'General'}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
                    <div style="background-color: #0f172a; padding: 20px; text-align: center;">
                        <h2 style="color: #ffffff; margin: 0;">New Contact Enquiry</h2>
                    </div>
                    <div style="padding: 24px; background-color: #ffffff;">
                        <p style="color: #64748b; margin-bottom: 20px;">You have received a new enquiry from the website contact form.</p>
                        
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: bold; width: 140px;">Company Name:</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${companyName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: bold;">Email:</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: bold;">Contact No:</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${contactNo}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: bold;">Audit Type:</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${auditType || 'Not Specified'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; color: #475569; font-weight: bold; vertical-align: top;">Description:</td>
                                <td style="padding: 12px 0; color: #1e293b; line-height: 1.5;">${description || 'No description provided'}</td>
                            </tr>
                        </table>
                    </div>
                    <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
                        <p style="color: #94a3b8; font-size: 12px; margin: 0;">Sent via Limbaja Energy Website</p>
                    </div>
                </div>
            `,
        };

        // 2. Client Auto-Reply Email Template
        const clientMailOptions = {
            from: `"Limbaja Energy" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `Thank you for contacting Limbaja Energy`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
                    <div style="background-color: #0ea5e9; padding: 30px 20px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Thank You!</h1>
                    </div>
                    <div style="padding: 30px; background-color: #ffffff;">
                        <p style="color: #334155; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
                            Dear <strong>${companyName}</strong>,
                        </p>
                        <p style="color: #334155; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
                            Thank you for reaching out to <strong>Limbaja Energy</strong>. We have received your enquiry regarding <strong>${auditType || 'Energy Services'}</strong> and our team will get back to you shortly.
                        </p>
                        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
                            <p style="color: #475569; margin: 0 0 10px 0; font-weight: bold;">We received the following details:</p>
                            <p style="color: #64748b; margin: 5px 0;">Description: ${description ? description.substring(0, 100) + (description.length > 100 ? '...' : '') : 'N/A'}</p>
                        </div>
                        <p style="color: #334155; font-size: 16px; line-height: 1.6;">
                            Best Regards,<br>
                            <strong style="color: #0f172a;">Limbaja Energy Team</strong>
                        </p>
                    </div>
                    <div style="background-color: #0f172a; padding: 20px; text-align: center; color: #ffffff;">
                        <p style="margin: 0 0 10px 0;">Nikol – Ahmedabad 382350 Gujarat</p>
                        <p style="margin: 0; font-size: 14px; opacity: 0.8;">
                            <a href="mailto:limbajaenergy@gmail.com" style="color: #ffffff; text-decoration: none;">limbajaenergy@gmail.com</a> | +91 97142 53756
                        </p>
                    </div>
                </div>
            `,
        };

        // Send both emails in parallel
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(clientMailOptions)
        ]);

        return NextResponse.json(
            { message: 'Emails sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to send email' },
            { status: 500 }
        );
    }
}
