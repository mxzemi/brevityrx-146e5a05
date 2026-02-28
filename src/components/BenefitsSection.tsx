import { Zap, TrendingUp, Users, HeartPulse } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Under 48-Hour Approvals",
    description: "Slash approval timelines from weeks to hours. Patients start therapy faster.",
    metric: "90% faster",
  },
  {
    icon: TrendingUp,
    title: "Recovered Revenue",
    description: "Fewer denials and abandonment means more prescriptions dispensed and revenue retained.",
    metric: "$2M+ saved/yr",
  },
  {
    icon: Users,
    title: "Reduced Staff Burden",
    description: "Free your PA team from repetitive data gathering and fax chasing. Redeploy to higher-value work.",
    metric: "80% less manual work",
  },
  {
    icon: HeartPulse,
    title: "Better Patient Outcomes",
    description: "Faster access to specialty medications reduces therapy gaps and improves clinical outcomes.",
    metric: "2x faster therapy starts",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-28">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            The Impact of Automation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results for specialty pharmacies and health systems.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-border bg-card hover:shadow-elevated transition-shadow duration-300 space-y-4"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 group-hover:gradient-primary transition-all duration-300">
                <benefit.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div className="text-2xl font-bold text-primary">{benefit.metric}</div>
              <h3 className="text-lg font-semibold text-secondary">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
