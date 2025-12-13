import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-10 text-slate-800 text-center">Contact Us</h1>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

                <div className="bg-slate-50 p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-[#0ea5e9]">Get In Touch</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-[#22c55e] shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-slate-800">Address</h3>
                                <p className="text-slate-600">
                                    2 Shrijinagar, Arihantnagar Road,<br />
                                    Near Aashapura Cottages,<br />
                                    Bhuj-370001, Kutch, Gujarat, India
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Phone className="text-[#22c55e] shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-slate-800">Phone</h3>
                                <p className="text-slate-600">+91 97142 53756</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Mail className="text-[#22c55e] shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-slate-800">Email</h3>
                                <p className="text-slate-600">limbajaenergy@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">Send a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded focus:border-[#0ea5e9] focus:outline-none" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded focus:border-[#0ea5e9] focus:outline-none" placeholder="Your Email" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                            <textarea className="w-full px-4 py-2 border border-slate-300 rounded focus:border-[#0ea5e9] focus:outline-none h-32" placeholder="How can we help?"></textarea>
                        </div>
                        <button className="w-full bg-[#0ea5e9] hover:bg-blue-600 text-white font-bold py-3 rounded transition-colors">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
