import { ShieldCheck } from "lucide-react";

const RegulatorySection = () => {
  return (
    <section id="regulatory" className="py-20 md:py-28">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            CMS-0057-F Changes Everything.{" "}
            <span className="text-primary">We're Ready.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Starting January 2026, CMS requires payors to provide FHIR-based Prior Authorization APIs and respond to expedited requests within 72 hours. This mandate creates the first standardized digital infrastructure for automated PA — and BrevityRx is built from the ground up to use it. While legacy vendors retrofit, we're native.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-bold shadow-card">
            <ShieldCheck className="w-4 h-4" />
            CMS-0057-F Compliant — Day One
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatorySection;
