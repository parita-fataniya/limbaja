import { Phone, Mail, MapPin, Send, User, Building, FileText, HelpCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Page Header */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0ea5e9]/10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <div className="h-1 w-20 bg-[#22c55e] mx-auto rounded"></div>
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
                            <h2 className="text-2xl font-bold mb-8 text-[#0ea5e9]">Get In Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#22c55e] shadow-sm group-hover:bg-[#22c55e] group-hover:text-white transition-colors shrink-0">
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
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#22c55e] shadow-sm group-hover:bg-[#22c55e] group-hover:text-white transition-colors shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg mb-1">Contact No.</h3>
                                        <p className="text-slate-600 font-medium text-lg">+91 97142 53756</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#22c55e] shadow-sm group-hover:bg-[#22c55e] group-hover:text-white transition-colors shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg mb-1">Email</h3>
                                        <p className="text-slate-600 font-medium text-lg">limbajaenergy@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-800 mb-2">Enquiry Form</h2>
                            <p className="text-slate-500">Fill out the form below and we will get back to you.</p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                                <div className="relative">
                                    <Building className="absolute left-4 top-3 text-slate-400" size={20} />
                                    <input type="text" className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 focus:outline-none transition-all" placeholder="Enter company name" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Mail ID</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-3 text-slate-400" size={20} />
                                    <input type="email" className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 focus:outline-none transition-all" placeholder="email@company.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Contact No.</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-3 text-slate-400" size={20} />
                                    <input type="tel" className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 focus:outline-none transition-all" placeholder="+91 00000 00000" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Type of Audit Require</label>
                                <div className="relative">
                                    <HelpCircle className="absolute left-4 top-3 text-slate-400" size={20} />
                                    <select className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 focus:outline-none transition-all bg-white text-slate-600 appearance-none">
                                        <option value="">Select Audit Type</option>
                                        <option value="detailed">Detailed Energy Audit</option>
                                        <option value="electrical">Electrical Arc Flash Study</option>
                                        <option value="thermography">Thermography Study</option>
                                        <option value="flow">Flow Measurement</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                                <div className="relative">
                                    <FileText className="absolute left-4 top-3 text-slate-400" size={20} />
                                    <textarea className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 focus:outline-none transition-all h-32 resize-none" placeholder="Describe your requirements..."></textarea>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-2">
                                <button type="submit" className="flex-1 bg-[#0ea5e9] hover:bg-blue-600 text-white font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30">
                                    <Send size={20} />
                                    Send
                                </button>
                                <button type="reset" className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-lg transition-all border border-slate-200">
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
