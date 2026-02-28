import { AlertTriangle, Clock, DollarSign } from "lucide-react";

const stats = [
  { icon: AlertTriangle, value: "75%", label: "of specialty PAs initially denied due to incomplete documentation" },
  { icon: Clock, value: "14+ days", label: "average time to approval for specialty medications" },
  { icon: DollarSign, value: "$35K+", label: "annual cost per FTE dedicated to prior auth workflows" },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-28">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            Prior auth is broken.{" "}
            <span className="text-accent-rose">Patients pay the price.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Specialty pharmacies lose revenue and patients face dangerous therapy delays because
            prior authorization is manual, error-prone, and painfully slow.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl bg-muted/50 border border-border shadow-soft space-y-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-4xl font-bold text-secondary">{stat.value}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
