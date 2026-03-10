import { Send, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <a href="#" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-700/50 shadow-lg">
                                <img src="/assets/clubgg-logo.png" alt="ClubGG Agent Tools Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">
                                ClubGG <span className="text-accent">Agent Tools</span>
                            </span>
                        </a>
                        <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
                            Automation tools specifically designed for ClubGG poker agents and club managers. Speed up your weekly settlements with OCR.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-600 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-600 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-slate-300 uppercase text-xs tracking-widest">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#features" className="text-slate-500 hover:text-accent transition-colors text-sm font-medium">Features</a></li>
                            <li><a href="#how-it-works" className="text-slate-500 hover:text-accent transition-colors text-sm font-medium">How it Works</a></li>
                            <li><a href="#roadmap" className="text-slate-500 hover:text-accent transition-colors text-sm font-medium">Roadmap</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-slate-300 uppercase text-xs tracking-widest">Connect</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <a
                                    href="https://t.me/Agent_Calc_bot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-accent/40 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-all font-bold"
                                >
                                    <Send className="w-4 h-4 fill-current" />
                                    Launch Bot
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://t.me/ClubAgentOps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-accent transition-colors font-medium flex items-center gap-2"
                                >
                                    Support: @ClubAgentOps
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-slate-900 gap-6">
                    <p className="text-slate-600 text-[10px] font-medium tracking-wide uppercase">
                        © {currentYear} ClubGG Agent Tools. All rights reserved. Not affiliated with ClubGG.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-slate-600 hover:text-slate-400 text-[10px] font-bold uppercase tracking-widest">Terms</a>
                        <a href="#" className="text-slate-600 hover:text-slate-400 text-[10px] font-bold uppercase tracking-widest">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
