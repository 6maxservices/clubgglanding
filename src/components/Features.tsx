import { Zap, Scan, Users, CopyCheck, MessageSquare, Layout } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Zap className="w-6 h-6 text-primary" />,
            title: "Settlement Automation",
            text: "Reduce manual weekly settlement work and speed up operations significantly.",
        },
        {
            icon: <Scan className="w-6 h-6 text-primary" />,
            title: "Screenshot OCR",
            text: "Extract balance information directly from ClubGG screenshots with high accuracy.",
        },
        {
            icon: <Users className="w-6 h-6 text-primary" />,
            title: "Player Tracking",
            text: "Keep player records organized across settlement workflows and weeks.",
        },
        {
            icon: <CopyCheck className="w-6 h-6 text-primary" />,
            title: "Duplicate Detection",
            text: "Avoid processing the same screenshot or entry twice by mistake.",
        },
        {
            icon: <MessageSquare className="w-6 h-6 text-primary" />,
            title: "Telegram Workflow",
            text: "Run the process inside Telegram with a simple operational flow everyone knows.",
        },
        {
            icon: <Layout className="w-6 h-6 text-primary" />,
            title: "Backoffice Simplicity",
            text: "Designed for real admin use, not just demos. Robust and practical.",
        },
    ];

    return (
        <section id="features" className="section-padding bg-slate-900/30">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Built for ClubGG agents
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Everything you need to manage your club's settlements in one Telegram bot. Focus on your players, not the paperwork.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="card-glass group hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-primary/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
