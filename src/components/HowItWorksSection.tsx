import { Database, BrainCircuit, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Database,
    step: "01",
    title: "Connect to EMR Data",
    description: "BrevityRx securely integrates with your EMR to extract relevant clinical documentation — lab results, notes, diagnoses — automatically.",
  },
  {
    icon: BrainCircuit,
    step: "02",
    title: "AI Maps Evidence to Rules",
    description: "Our agentic AI cross-references patient data against payor-specific medical necessity criteria, building the strongest possible case.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Compliant PA Submitted",
    description: "A complete, accurate prior authorization is submitted automatically — no missing fields, no back-and-forth, no delays.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 gradient-hero">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            How BrevityRx Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three steps. Zero manual work. Complete prior authorizations in under 48 hours.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
              )}
              <div className="relative z-10 bg-card p-8 rounded-2xl border border-border shadow-card space-y-5 h-full">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl gradient-primary">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
