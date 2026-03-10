import { Calendar } from 'lucide-react';

const Roadmap = () => {
    const futureTools = [
        "PokerBros support",
        "PPPoker support",
        "CoinPoker support",
        "Agent analytics",
        "Player profit tracking",
        "Expanded reporting tools",
    ];

    return (
        <section id="roadmap" className="section-padding bg-slate-900/10">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 text-xs font-semibold mb-6">
                                <Calendar className="w-3 h-3" />
                                Roadmap
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                More tools <br />
                                <span className="text-slate-500 text-3xl md:text-4xl">coming soon</span>
                            </h2>
                            <p className="text-slate-400 leading-relaxed mb-8">
                                The first release focuses on ClubGG settlements. Future updates may include more tools and additional platform support to cover your entire operation.
                            </p>
                        </div>

                        <div className="flex-1 w-full">
                            <div className="card-glass bg-slate-900/80 p-6 space-y-3">
                                {futureTools.map((tool, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700 group">
                                        <span className="text-slate-300 font-medium group-hover:text-white">{tool}</span>
                                        <span className="text-[10px] uppercase tracking-widest text-slate-600 bg-slate-950 px-2 py-1 rounded">Soon</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
