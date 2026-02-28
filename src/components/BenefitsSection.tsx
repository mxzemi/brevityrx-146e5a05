import { Clock, UserCheck, DollarSign, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    metric: "< 48 hrs",
    title: "Order to Approval",
    description: "Average time from order to PA approval, down from 2+ weeks.",
  },
  {
    icon: UserCheck,
    metric: "Xh → minutes",
    title: "Staff Time per PA",
    description: "Free RN case managers from repetitive evidence gathering so they can focus on clinical work.",
  },
  {
    icon: DollarSign,
    metric: "$__M recovered",
    title: "Revenue Recaptured",
    description: "Annual revenue recovered from faster fills on high-cost biologics — fewer abandonments, fewer lost scripts.",
  },
  {
    icon: RefreshCw,
    metric: "Auto re-auth",
    title: "Continuous Authorization",
    description: "Monitors refill dates and starts the next PA 30 days early — no manual tracking, no lapses.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-28">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            Measurable Impact from Day One
          </h2>
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
              <div className="text-3xl font-bold text-primary">{benefit.metric}</div>
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
