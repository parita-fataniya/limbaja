"use client";

import { useState } from 'react';
import { Phone, Mail, Building, FileText, HelpCircle, Send, Loader2 } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        companyName: '',
        companyMailId: '',
        contactNo: '',
        auditType: '',
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    companyName: formData.companyName,
                    email: formData.companyMailId,
                    contactNo: formData.contactNo,
                    auditType: formData.auditType,
                    description: formData.description
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSubmitStatus('success');
            setFormData({
                companyName: '',
                companyMailId: '',
                contactNo: '',
                auditType: '',
                description: ''
            });
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Enquiry Form</h2>
                <p className="text-slate-500">Fill out the form below and we will get back to you.</p>
            </div>

            {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Message sent successfully! We will contact you soon.
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Failed to send message. Please try again later.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                    <div className="relative">
                        <Building className="absolute left-4 top-3 text-slate-400" size={20} />
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 focus:outline-none transition-all"
                            placeholder="Enter company name"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company Mail ID</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-3 text-slate-400" size={20} />
                        <input
                            type="email"
                            name="companyMailId"
                            value={formData.companyMailId}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 focus:outline-none transition-all"
                            placeholder="email@company.com"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Contact No.</label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-3 text-slate-400" size={20} />
                        <input
                            type="tel"
                            name="contactNo"
                            value={formData.contactNo}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 focus:outline-none transition-all"
                            placeholder="+91 00000 00000"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Type of Audit Require</label>
                    <div className="relative">
                        <HelpCircle className="absolute left-4 top-3 text-slate-400" size={20} />
                        <select
                            name="auditType"
                            value={formData.auditType}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 focus:outline-none transition-all bg-white text-slate-600 appearance-none"
                        >
                            <option value="">Select Audit Type</option>
                            <option value="Detailed Energy Audit">Detailed Energy Audit</option>
                            <option value="Electrical Arc Flash Study">Electrical Arc Flash Study</option>
                            <option value="Thermography Study">Thermography Study</option>
                            <option value="Flow Measurement">Flow Measurement</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                    <div className="relative">
                        <FileText className="absolute left-4 top-3 text-slate-400" size={20} />
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 focus:outline-none transition-all h-32 resize-none"
                            placeholder="Describe your requirements..."
                        ></textarea>
                    </div>
                </div>

                <div className="flex gap-4 pt-2">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-[#0ea5e9] hover:bg-blue-600 text-white font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                    <button
                        type="button"
                        onClick={() => setFormData({
                            companyName: '',
                            companyMailId: '',
                            contactNo: '',
                            auditType: '',
                            description: ''
                        })}
                        className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-lg transition-all border border-slate-200"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}
