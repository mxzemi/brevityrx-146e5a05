import { FileSearch, RotateCcw, TrendingDown, Eye } from "lucide-react";

const painPoints = [
  {
    icon: FileSearch,
    title: "The Chart Dive",
    description:
      "Your team manually scrolls through hundreds of pages of clinical charts searching for the one lab result or failed therapy a payor requires. Physicians spend 12–13 hours per week managing 43 prior authorizations at $10.97 per manual transaction — and 92% of practices have been forced to hire or reassign staff just to handle PA volume.",
    sources: "AMA 2024; CAQH 2024; MGMA 2025",
  },
  {
    icon: RotateCcw,
    title: "The Denial Loop",
    description:
      "Specialty biologics face initial denial rates of up to 50%, even when recommended by specialists. Medicare Advantage insurers made 53 million PA determinations in 2024, with denial rates ranging from 4.2% to 12.8% by insurer. Staff must decode each denial letter, hunt for missing data, and resubmit — adding weeks to therapy start.",
    sources: "Arthritis Foundation 2025; KFF 2025",
  },
  {
    icon: Eye,
    title: "The Hidden Truth",
    description:
      "82–83% of specialty drug appeals are overturned — proving the clinical evidence to approve these therapies exists. It simply isn't being presented in the format payors require the first time.",
    sources: "ASTRO 2024; AMA 2024",
  },
  {
    icon: TrendingDown,
    title: "The Silent Revenue Leak",
    description:
      "Healthcare systems spend over $25 billion annually on PA administrative costs. Only 35% of PA transactions are currently electronic. Every delayed or abandoned PA is a lost fill — for high-cost biologics ($38,000+/patient/year), even a small improvement in approval rates recovers significant revenue.",
    sources: "ClaritasRx; Counterforce Health",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-28">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            Your Team Wasn't Hired to{" "}
            <span className="text-accent-rose">Chase Paperwork.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-muted/50 border border-border shadow-soft space-y-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10">
                <point.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-secondary">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
              <p className="text-xs text-muted-foreground/60 italic">{point.sources}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
