import type { Metadata } from 'next';
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us | Limbaja Energy",
    description: "Get in touch with Limbaja Energy for energy audits, consultancy, and sustainable solutions. Reach out via phone, email, or our enquiry form.",
};

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Page Header */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <div className="h-1 w-20 bg-primary mx-auto rounded"></div>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                        Get in touch with us for expert energy solutions.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full">
                            <h2 className="text-2xl font-bold mb-8 text-secondary">Get In Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg mb-1">Address</h3>
                                        <div className="space-y-2 text-slate-600">
                                            <p>
                                                <strong className="text-slate-700">H.O. Office:</strong><br />
                                                Nikol – Ahmedabad 382350 Gujarat
                                            </p>
                                            <p>
                                                <strong className="text-slate-700">Registered Office:</strong><br />
                                                Bhuj - Kutch 370001 Gujarat
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg mb-1">Contact No.</h3>
                                        <p className="text-slate-600 font-medium text-lg">+91 97142 53756</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg mb-1">Email</h3>
                                        <p className="text-slate-600 font-medium text-lg">limbajaenergy@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="pt-8 mt-8 border-t border-slate-200">
                                <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 h-64">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.0344143568755!2d69.6520208!3d23.231415100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e3e6a560877%3A0x1340d2b65a84581a!2sLIMBAJA%20ENERGY!5e0!3m2!1sen!2sin!4v1766775151033!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <ContactForm />


                </div>
            </div>
        </div>
    );
}
