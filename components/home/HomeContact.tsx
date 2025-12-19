"use client";

import { Send, Phone, User, Building, HelpCircle, FileText } from "lucide-react";

export default function HomeContact() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">

                    <div className="bg-[#0f172a] text-white p-10 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea5e9]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Quick Enquiry</h3>
                            <p className="text-slate-400 mb-8">Have a question? Fill the form and we'll get back to you shortly.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="text-[#22c55e]" size={20} />
                                    <span className="font-medium">+91 97142 53756</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] text-xs font-bold">@</div>
                                    <span className="font-medium">limbajaenergy@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-10 md:w-3/5">
                        <form className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Company Name</label>
                                <div className="relative">
                                    <Building className="absolute left-3 top-2.5 text-slate-400" size={18} />
                                    <input type="text" className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:outline-none focus:bg-white transition-all font-medium text-slate-700" placeholder="Your Company" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Email ID</label>
                                    <input type="email" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:outline-none focus:bg-white transition-all font-medium text-slate-700" placeholder="name@company.com" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Contact No</label>
                                    <input type="tel" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:outline-none focus:bg-white transition-all font-medium text-slate-700" placeholder="+91..." />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Audit Type</label>
                                <div className="relative">
                                    <HelpCircle className="absolute left-3 top-2.5 text-slate-400" size={18} />
                                    <select className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:outline-none focus:bg-white transition-all font-medium text-slate-700 appearance-none">
                                        <option value="">Select Requirement</option>
                                        <option value="energy-audit">Energy Audit</option>
                                        <option value="thermography">Thermography</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Message</label>
                                <textarea className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:border-[#0ea5e9] focus:outline-none focus:bg-white transition-all font-medium text-slate-700 h-24 resize-none" placeholder="How can we help?"></textarea>
                            </div>

                            <button className="w-full bg-[#0ea5e9] hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                                <Send size={18} /> Send Enquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
