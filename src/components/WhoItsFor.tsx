import { UserCheck, ShieldCheck, Globe } from 'lucide-react';

const WhoItsFor = () => {
    const cards = [
        {
            icon: <UserCheck className="w-10 h-10 text-accent" />,
            title: "Poker Agents",
            text: "For agents managing weekly balances and settlements across multiple players and groups.",
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-accent" />,
            title: "Club Managers",
            text: "For operators who want more control, transparency, and less manual admin work for their staff.",
        },
        {
            icon: <Globe className="w-10 h-10 text-accent" />,
            title: "Private Poker Communities",
            text: "For groups that need a more organized and professional way to handle internal settlement workflows.",
        },
    ];

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute bottom-0 left-0 w-full h-[600px] -z-10 bg-slate-950">
                <img
                    src="/assets/community-bg.png"
                    alt="Poker community atmosphere"
                    className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Who uses ClubGG Agent Tools?
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Our tools are built for the daily operations of modern poker clubs and communities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div key={index} className="relative p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center">
                            <div className="mb-6">{card.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoItsFor;
