import { Send, Zap } from 'lucide-react';

const CTA = () => {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-primary/20 blur-[100px] rounded-full -z-10" />

            <div className="container-custom">
                <div className="bg-gradient-to-br from-blue-600 to-primary p-8 md:p-16 rounded-3xl text-center shadow-2xl shadow-primary/20 border border-white/10 relative">
                    {/* Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-slate-900 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg">
                        <Zap className="w-3 h-3 fill-current" />
                        Telegram-based workflow
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                        Start automating your <br />
                        ClubGG settlements
                    </h2>
                    <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
                        Launch the workflow inside Telegram and reduce manual admin time immediately. No installation required.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <a
                            href="https://t.me/Agent_Calc_bot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary hover:bg-slate-100 px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-3"
                        >
                            <Send className="w-6 h-6 fill-current" />
                            Open Telegram Bot
                        </a>
                        <span className="text-blue-200/60 text-xs font-medium uppercase tracking-[0.2em] mb-2">
                            Free to start • OCR Powered
                        </span>
                        <a href="https://t.me/ClubAgentOps" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors text-sm font-medium underline underline-offset-4 decoration-blue-400/30 hover:decoration-blue-400/80">
                            Have questions? Contact Support
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
