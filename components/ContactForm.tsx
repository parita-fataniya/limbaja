"use client";

import { useState } from 'react';
import { Phone, Mail, Building, FileText, HelpCircle, Send, Loader2, ChevronDown } from "lucide-react";
import { services } from "@/app/service/ServiceData";

interface ContactFormProps {
    embedded?: boolean;
}

export default function ContactForm({ embedded = false }: ContactFormProps) {
    const [formData, setFormData] = useState({
        companyName: '',
        companyMailId: '',
        contactNo: '',
        auditType: '',
        description: ''
    });
    const [errors, setErrors] = useState({
        companyName: '',
        companyMailId: '',
        contactNo: '',
        auditType: '',
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [isAuditOpen, setIsAuditOpen] = useState(false);

    const validateForm = () => {
        const newErrors = {
            companyName: '',
            companyMailId: '',
            contactNo: '',
            auditType: '',
            description: ''
        };
        let isValid = true;

        if (!formData.companyName.trim()) {
            newErrors.companyName = 'Company Name is required';
            isValid = false;
        }

        if (!formData.companyMailId.trim()) {
            newErrors.companyMailId = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyMailId)) {
            newErrors.companyMailId = 'Invalid email format';
            isValid = false;
        }

        if (!formData.contactNo.trim()) {
            newErrors.contactNo = 'Contact Number is required';
            isValid = false;
        } else if (!/^\d+$/.test(formData.contactNo)) {
            newErrors.contactNo = 'Contact Number must contain only digits';
            isValid = false;
        } else if (formData.contactNo.length > 15) {
            newErrors.contactNo = 'Phone number must not exceed 15 digits';
            isValid = false;
        }

        if (!formData.auditType) {
            newErrors.auditType = 'Please select an audit type';
            isValid = false;
        }

        // Description is optional now

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // For contact number, only allow digits
        if (name === 'contactNo') {
            if (value && !/^\d*$/.test(value)) {
                return;
            }
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

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

    const containerClasses = embedded
        ? "w-full"
        : "bg-white p-8 rounded-2xl shadow-xl border border-slate-100";

    return (
        <div className={containerClasses}>
            {!embedded && (
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Enquiry Form</h2>
                    <p className="text-slate-500">Fill out the form below and we will get back to you.</p>
                </div>
            )}

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

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                    <div className="relative">
                        <Building className="absolute left-4 top-3 text-slate-400" size={20} />
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${errors.companyName
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                                : 'border-slate-200 focus:border-primary focus:ring-primary/20'
                                }`}
                            placeholder="Enter company name"
                        />
                    </div>
                    {errors.companyName && (
                        <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
                    )}
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
                            className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${errors.companyMailId
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                                : 'border-slate-200 focus:border-primary focus:ring-primary/20'
                                }`}
                            placeholder="email@company.com"
                        />
                    </div>
                    {errors.companyMailId && (
                        <p className="mt-1 text-sm text-red-500">{errors.companyMailId}</p>
                    )}
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
                            className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${errors.contactNo
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                                : 'border-slate-200 focus:border-primary focus:ring-primary/20'
                                }`}
                            placeholder="+91 00000 00000"
                        />
                    </div>
                    {errors.contactNo && (
                        <p className="mt-1 text-sm text-red-500">{errors.contactNo}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Type of Audit Require</label>
                    <div className="relative">
                        <HelpCircle className="absolute left-4 top-3 text-slate-400 z-10" size={20} />

                        <button
                            type="button"
                            onClick={() => setIsAuditOpen(!isAuditOpen)}
                            className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all text-left flex items-center justify-between bg-white ${errors.auditType
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                                : 'border-slate-200 focus:border-primary focus:ring-primary/20'
                                }`}
                        >
                            <span className={formData.auditType ? "text-slate-900" : "text-slate-400"}>
                                {formData.auditType || "Select Audit Type"}
                            </span>
                            <ChevronDown size={20} className={`text-slate-400 transition-transform ${isAuditOpen ? "rotate-180" : ""}`} />
                        </button>

                        {isAuditOpen && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl z-50 max-h-48 overflow-y-auto">
                                <div
                                    onClick={() => {
                                        setFormData(prev => ({ ...prev, auditType: "" }));
                                        setIsAuditOpen(false);
                                    }}
                                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer text-slate-400 text-sm border-b border-slate-50"
                                >
                                    Select Audit Type
                                </div>
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        onClick={() => {
                                            setFormData(prev => ({ ...prev, auditType: service.title }));
                                            if (errors.auditType) setErrors(prev => ({ ...prev, auditType: '' }));
                                            setIsAuditOpen(false);
                                        }}
                                        className="px-4 py-3 hover:bg-slate-50 cursor-pointer text-slate-700 text-sm border-b border-slate-50 last:border-0 transition-colors"
                                    >
                                        {service.title}
                                    </div>
                                ))}
                                <div
                                    onClick={() => {
                                        setFormData(prev => ({ ...prev, auditType: "Other" }));
                                        if (errors.auditType) setErrors(prev => ({ ...prev, auditType: '' }));
                                        setIsAuditOpen(false);
                                    }}
                                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer text-slate-700 text-sm font-medium"
                                >
                                    Other
                                </div>
                            </div>
                        )}
                    </div>
                    {errors.auditType && (
                        <p className="mt-1 text-sm text-red-500">{errors.auditType}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Description <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <div className="relative">
                        <FileText className="absolute left-4 top-3 text-slate-400" size={20} />
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all h-32 resize-none ${errors.description
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                                : 'border-slate-200 focus:border-[#0ea5e9] focus:ring-[#0ea5e9]/20'
                                }`}
                            placeholder="Describe your requirements..."
                        ></textarea>
                    </div>
                    {errors.description && (
                        <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                    )}
                </div>

                <div className="flex gap-4 pt-2">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-primary hover:brightness-110 text-white font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setFormData({
                                companyName: '',
                                companyMailId: '',
                                contactNo: '',
                                auditType: '',
                                description: ''
                            });
                            setErrors({
                                companyName: '',
                                companyMailId: '',
                                contactNo: '',
                                auditType: '',
                                description: ''
                            });
                            setSubmitStatus('idle');
                        }}
                        className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-lg transition-all border border-slate-200"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}
