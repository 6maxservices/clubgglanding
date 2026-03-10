import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'How it Works', href: '#how-it-works' },
        { name: 'Roadmap', href: '#roadmap' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
            <div className="container-custom flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-700/50 shadow-lg group-hover:border-accent transition-colors">
                        <img src="/assets/clubgg-logo.png" alt="ClubGG Agent Tools Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-xl tracking-tight hidden sm:block">
                        ClubGG <span className="text-accent">Agent Tools</span>
                    </span>
                    <span className="font-bold text-xl tracking-tight sm:hidden">
                        ClubGG <span className="text-accent">AT</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-white transition-colors font-medium text-sm"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://t.me/ClubAgentOps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white transition-colors font-medium text-sm mr-2"
                    >
                        Support
                    </a>
                    <a
                        href="https://t.me/Agent_Calc_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/20"
                    >
                        Open Bot
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-white transition-colors font-medium text-lg text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://t.me/ClubAgentOps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors font-medium text-lg text-center mt-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact Support
                    </a>
                    <a
                        href="https://t.me/Agent_Calc_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-blue-700 text-white px-5 py-4 rounded-xl text-lg font-bold transition-all text-center shadow-lg shadow-primary/20"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Start on Telegram
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
