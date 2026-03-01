import { Building2, Hospital } from "lucide-react";

const personas = [
  {
    icon: Building2,
    title: "Specialty Pharmacies",
    description:
      "Speed up time-to-fill for high-cost biologics across oncology, rare disease, neurology, rheumatology, and gastroenterology. Reduce the 37–40% abandonment rate. Recover revenue that's currently lost to PA delays and denials. BrevityRx handles the clinical evidence assembly your team shouldn't have to do manually.",
  },
  {
    icon: Hospital,
    title: "Health Systems",
    description:
      "Reduce the administrative burden on your team so they can focus on patient care, not paperwork. Automate the PA workflow across departments — from order to approval — without adding headcount. Stop spending 12–13 hours per provider per week on a process that should be autonomous.",
  },
];

const PersonasSection = () => {
  return (
    <section id="personas" className="py-20 md:py-28">
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
