import { Clock, UserCheck, DollarSign, RefreshCw, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    metric: "< 48 hrs",
    title: "Order to Approval",
    description: "Average time from order to PA approval, down from 10–30+ days.",
  },
  {
    icon: UserCheck,
    metric: "12–13 hrs → minutes",
    title: "Weekly Staff Time Reclaimed",
    description: "Per provider, freeing your team for patient care instead of paperwork.",
  },
  {
    icon: DollarSign,
    metric: "$25B+",
    title: "Industry PA Admin Costs",
    description: "Annual industry spend on PA admin costs — we help you stop contributing to it.",
  },
  {
    icon: RefreshCw,
    metric: "Auto re-auth",
    title: "Continuous Authorization",
    description: "Monitors refill dates and starts the next PA 30 days early — no manual tracking, no therapy lapses.",
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

        {/* Regulatory callout */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl border border-primary/20 bg-primary/5 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1 space-y-2">
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-secondary">CMS-0057-F is live.</span>{" "}
                Payors must now support FHIR APIs and 72-hour expedited turnaround. The $2.5–3.5B prior authorization market is projected to reach $4.5–8.8B by 2035. BrevityRx was built for this moment.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-bold shadow-card shrink-0">
              <ShieldCheck className="w-4 h-4" />
              CMS-0057-F Compliant — Day One
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
