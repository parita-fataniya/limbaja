"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export function Footer() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(path);
    };

    return (
        <footer className="bg-[#1e293b] text-white pt-16 pb-8 border-t-4 border-[#75b745]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-[#3154a5] inline-block pb-2">Limbaja Energy</h3>
                        <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                            Limbaja Energy is committed to help clients achieve energy savings and provides complete end-to-end solutions for energy conservation and efficiency.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-slate-700 p-2 rounded hover:bg-[#3154a5] transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="bg-slate-700 p-2 rounded hover:bg-[#3154a5] transition-colors"><Linkedin size={18} /></a>
                            <a href="#" className="bg-slate-700 p-2 rounded hover:bg-[#3154a5] transition-colors"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-[#75b745] inline-block pb-2">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/about-us" },
                                { name: "Service", href: "/service" },
                                { name: "Clients", href: "/clients" },
                                { name: "Instrument", href: "/instrument" },
                                { name: "Contact Us", href: "/contact-us" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`flex items-center gap-2 text-sm transition-all ${isActive(link.href)
                                                ? "text-[#75b745] pl-2 font-bold"
                                                : "text-slate-300 hover:text-[#75b745] hover:pl-2"
                                            }`}
                                    >
                                        <ArrowRight size={14} className={isActive(link.href) ? "text-[#75b745]" : "text-[#3154a5]"} /> {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-[#fcc017] inline-block pb-2">Our Services</h3>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-[#fcc017] min-w-[14px]" /> Energy Audit</li>
                            <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-[#fcc017] min-w-[14px]" /> Power Quality Audit</li>
                            <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-[#fcc017] min-w-[14px]" /> Thermography</li>
                            <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-[#fcc017] min-w-[14px]" /> Electrical Safety Audit</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-[#3154a5] inline-block pb-2">Contact Us</h3>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li className="flex gap-3">
                                <MapPin className="text-[#75b745] shrink-0" size={20} />
                                <span>
                                    2 Shrijinagar, Arihantnagar Road,<br />
                                    Near Aashapura Cottages,<br />
                                    Bhuj-370001, Kutch, Gujarat, India
                                </span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="text-[#75b745] shrink-0" size={20} />
                                <span>+91 97142 53756</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="text-[#75b745] shrink-0" size={20} />
                                <span>limbajaenergy@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Limbaja Energy. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
