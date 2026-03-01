import { FileWarning, BrainCircuit, CalendarClock } from "lucide-react";

const differentiators = [
  {
    icon: FileWarning,
    title: "Denial Intelligence",
    description:
      "Our agent reads a denial letter, understands the technical reason for rejection, and automatically queries the EMR to find the missing evidence to overturn it. No manual chart review. No guessing. With 82–83% of appeals already being overturned, the evidence exists — we just find it first.",
  },
  {
    icon: BrainCircuit,
    title: "Specialty-First Clinical IQ",
    description:
      "We focus on the hardest cases: oncology, rheumatology, neurology, rare disease, and gastroenterology. Our AI understands the clinical nuances of specialty therapeutics — not just generic formulary checks. Higher clinical IQ than any generalist tool on the market.",
  },
  {
    icon: CalendarClock,
    title: "Continuous Auth",
    description:
      "Many specialty drugs require re-authorization every 6 months. BrevityRx monitors the EMR for refill dates and starts the next PA cycle 30 days before expiration — automatically. No lapses, no therapy gaps, no revenue leakage.",
  },
];

const CompetitiveEdgeSection = () => {
  return (
    <section id="competitive" className="py-20 md:py-28 gradient-hero">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            Why BrevityRx Wins
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((diff, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-card border border-border shadow-card space-y-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-primary">
                <diff.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-secondary">{diff.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveEdgeSection;
