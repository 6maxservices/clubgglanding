import { Send, CheckCircle2 } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden text-white/90">
            {/* Background Banner Image */}
            <div className="absolute top-0 left-0 w-full h-[600px] md:h-[800px] -z-20">
                <img
                    src="/assets/hero-banner.png"
                    alt="Poker business background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            </div>

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full -z-10" />

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-accent text-xs font-semibold mb-6 animate-fade-in">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            Built for ClubGG agents
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                            Automate Your <br />
                            <span className="gradient-text">ClubGG Settlements</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Upload ClubGG screenshots, extract player balances, and generate weekly settlement reports through Telegram.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                            <a href="https://t.me/Agent_Calc_bot" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto text-lg">
                                <Send className="w-5 h-5" />
                                Start on Telegram
                            </a>
                            <a href="https://t.me/ClubAgentOps" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto text-lg">
                                Contact Support
                            </a>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            Built specifically for ClubGG operations
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-2xl relative">
                        <div className="relative z-10 p-2 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl border border-slate-700/50 group overflow-hidden">
                            {/* Product Preview Image Using Generated OCR Mockup */}
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 flex flex-col">
                                <img
                                    src="/assets/ocr-mockup.png"
                                    alt="Telegram bot interface showing OCR extraction"
                                    className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay Mockup UI Elements */}
                                <div className="absolute inset-0 flex flex-col pointer-events-none">
                                    <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-slate-900/60">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                                        </div>
                                    </div>

                                    <div className="flex-1 p-6 flex flex-col justify-end">
                                        <div className="p-4 border border-white/10 rounded-xl bg-slate-900/80 backdrop-blur-md space-y-3 shadow-2xl animate-float">
                                            <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold tracking-wider">
                                                <span>OCR RESULT</span>
                                                <span className="text-accent flex items-center gap-1">
                                                    <CheckCircle2 className="w-3 h-3" /> VERIFIED
                                                </span>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between p-2 rounded bg-blue-500/10 border border-blue-500/20">
                                                    <span className="text-xs font-medium text-blue-100 italic">Weekly Balance</span>
                                                    <span className="text-xs font-bold text-blue-400">+4,240.50</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Element - Telegram Icon */}
                            <div className="absolute -top-6 -right-6 lg:-right-8 bg-[#229ED9] p-4 rounded-2xl shadow-xl shadow-blue-500/20 animate-bounce transition-transform duration-500 hover:scale-110">
                                <Send className="w-8 h-8 text-white fill-current" />
                            </div>
                        </div>

                        {/* Background pattern */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
