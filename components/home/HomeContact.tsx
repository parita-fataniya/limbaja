"use client";

import { Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

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

                            {/* Map */}
                            <div className="mt-8 rounded-xl overflow-hidden border border-slate-700 h-48 w-full shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.0344143568755!2d69.6520208!3d23.231415100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e3e6a560877%3A0x1340d2b65a84581a!2sLIMBAJA%20ENERGY!5e1!3m2!1sen!2sin!4v1766775151033!5m2!1sen!2sin"
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


                    <div className="p-10 md:w-3/5">
                        <ContactForm embedded={true} />
                    </div>
                </div>
            </div>
        </section>
    );
}
