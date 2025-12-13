export default function ServicePage() {
    return (
        <div className="container mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-6 text-slate-800">Our Services</h1>
            <p className="text-slate-600 mb-8">We offer a comprehensive range of energy efficiency services.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Energy Audit', 'Power Quality Audit', 'Thermography', 'Electrical Safety Audit', 'Harmonic Analysis', 'Flow Measurement'].map((item) => (
                    <div key={item} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-xl text-slate-700">{item}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
