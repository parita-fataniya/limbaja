import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Scope of Work | Limbaja Energy",
    description: "Detailed scope of work and methodologies employed by Limbaja Energy for comprehensive energy audits and solutions.",
};

export default function ScopePage() {
    return (
        <div className="container mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-6 text-slate-800">Scope of Limbaja Energy</h1>
            <p className="text-slate-600">Details about the scope of work and methodologies used by Limbaja Energy.</p>
        </div>
    );
}
