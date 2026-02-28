import { Building2, Hospital } from "lucide-react";

const personas = [
  {
    icon: Building2,
    title: "Specialty Pharmacies",
    description:
      "Stop losing revenue to PA denials and patient abandonment. BrevityRx automates the clinical documentation that payors require — so your team dispenses faster and retains more patients.",
  },
  {
    icon: Hospital,
    title: "Health Systems",
    description:
      "Reduce administrative burden across your specialty clinics. BrevityRx integrates with your EMR to ensure every PA submission meets medical necessity requirements the first time.",
  },
];

const PersonasSection = () => {
  return (
    <section id="personas" className="py-20 md:py-28 gradient-hero">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            Built for the Teams That Need It Most
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {personas.map((persona, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-card border border-border shadow-card space-y-5"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-primary">
                <persona.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-secondary">{persona.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
