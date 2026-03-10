import { Upload, Cpu, FileText } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            step: "01",
            icon: <Upload className="w-8 h-8 text-accent" />,
            title: "Upload ClubGG screenshots",
            text: "Send screenshots directly to the Telegram bot. No complicated dashboards or apps needed.",
        },
        {
            step: "02",
            icon: <Cpu className="w-8 h-8 text-accent" />,
            title: "Automatic data extraction",
            text: "The system reads balances and identifies settlement data automatically using advanced OCR.",
        },
        {
            step: "03",
            icon: <FileText className="w-8 h-8 text-accent" />,
            title: "Generate weekly reports",
            text: "Review the workflow and produce a settlement report faster and more consistently.",
        },
    ];

    return (
        <section id="how-it-works" className="section-padding">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Generate a settlement in 3 steps
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Our Telegram-based workflow is designed for speed and reliability, allowing you to focus on growing your club instead of admin work.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[120px] left-[20%] right-[20%] h-0.5 border-t border-dashed border-slate-700 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="relative mb-8">
                                <div className="absolute -top-4 -right-4 bg-slate-800 text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border border-slate-700">
                                    {step.step}
                                </div>
                                <div className="w-24 h-24 bg-accent/10 rounded-3xl flex items-center justify-center border border-accent/20 shadow-xl shadow-accent/5">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed max-w-xs">
                                {step.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center max-w-3xl mx-auto">
                    <p className="text-slate-300">
                        <span className="font-bold text-white">Important:</span> This product supports a guided workflow, not "magic". While OCR is highly accurate, we include review steps to ensure 100% financial accuracy for your club.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
