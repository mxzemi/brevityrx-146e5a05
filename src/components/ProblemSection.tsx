import { FileSearch, RotateCcw, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: FileSearch,
    title: "The Chart Dive",
    description:
      "Clinical staff manually scroll through hundreds of pages of clinical charts searching for the one lab result or failed therapy a payor requires. It takes hours per case.",
  },
  {
    icon: RotateCcw,
    title: "The Denial Loop",
    description:
      "Incomplete submissions get denied. Staff must decode the denial letter, hunt for missing data, and resubmit — adding weeks to patient therapy start.",
  },
  {
    icon: TrendingDown,
    title: "The Silent Revenue Leak",
    description:
      "Every delayed or abandoned PA is a lost fill. For high-cost biologics ($10K–$50K/month), even a small improvement in approval rates recovers significant revenue.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-28">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            Your team wasn't hired to{" "}
            <span className="text-accent-rose">chase paperwork.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-muted/50 border border-border shadow-soft space-y-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10">
                <point.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-secondary">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
