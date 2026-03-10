import { AlertCircle, Clock, FileSpreadsheet, XCircle } from 'lucide-react';

const Problem = () => {
    const painPoints = [
        {
            icon: <AlertCircle className="w-6 h-6 text-red-400" />,
            title: "Collect screenshots",
            text: "Manually chasing players for screenshots and organizing them by club and week.",
        },
        {
            icon: <Clock className="w-6 h-6 text-red-400" />,
            title: "Track balances manually",
            text: "Calculating totals by hand from images, which is slow and prone to human error.",
        },
        {
            icon: <FileSpreadsheet className="w-6 h-6 text-red-400" />,
            title: "Manage players in Excel",
            text: "Maintaining complex spreadsheets that become unmanageable as your club grows.",
        },
        {
            icon: <XCircle className="w-6 h-6 text-red-400" />,
            title: "Mistakes and disputes",
            text: "Incorrect data entry leads to agent-player disputes and financial losses.",
        },
    ];

    return (
        <section id="problem" className="section-padding bg-slate-900/30">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        ClubGG settlements <br />
                        <span className="text-slate-400">take too much time</span>
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Poker agents usually manage settlements manually by collecting screenshots, checking player balances, tracking names in spreadsheets, and resolving mistakes by hand. This process is slow, repetitive, and error-prone.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {painPoints.map((point, index) => (
                        <div key={index} className="card-glass flex flex-col items-center text-center p-8 group">
                            <div className="bg-red-500/10 p-3 rounded-xl mb-6 group-hover:bg-red-500/20 transition-colors">
                                {point.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-3">{point.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {point.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-8 border-t border-slate-800">
                    <p className="text-xl font-medium text-white italic">
                        "ClubGG Agent Tools simplifies the process and reduces manual work."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Problem;
