import { Radio, SearchCheck, Send } from "lucide-react";

const agents = [
  {
    icon: Radio,
    step: "Agent 1",
    name: "The Sentinel",
    role: "Order Detection",
    description:
      "An autonomous listener monitors your EMR in real time via FHIR hooks (ServiceRequest, MedicationRequest). The instant a specialty drug or procedure is ordered that requires PA, Sentinel triggers — before anyone on your team even knows there's a requirement. It checks against a continuously updated payor rule-set database so nothing slips through.",
  },
  {
    icon: SearchCheck,
    step: "Agent 2",
    name: "The Clinical Researcher",
    role: "Evidence Assembly",
    description:
      "Instead of a nurse scrolling through 100 pages of charts, our RAG-powered agent finds exactly what the payor needs. If the policy requires 'failed therapy with Drug X,' the Clinical Researcher searches three years of pharmacy claims and clinical notes to find the date, dosage, and documented reason for discontinuation. Then the Cross-Examiner validates every piece of evidence against the specific payor policy — so nothing is submitted without proof it meets the criteria.",
  },
  {
    icon: Send,
    step: "Agent 3",
    name: "The Nexus",
    role: "Submission",
    description:
      "The last-mile agent. For modern payors, Nexus submits via the Da Vinci PAS FHIR API. For legacy portals that still lack APIs, it uses a browser agent to navigate and submit directly. If confidence on any element drops below 90%, it generates a Draft Review for your case manager — one click to approve, then it submits automatically.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      {/* Slightly higher opacity background reinforcement */}
      <div className="absolute inset-0 gradient-hero opacity-80 pointer-events-none" />
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            Three Autonomous Agents. One Bulletproof Submission.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A coordinated agentic workflow — from order detection to submission — with zero manual steps.
          </p>
        </div>

        {/* Agent pipeline */}
        <div className="grid md:grid-cols-3 gap-0 md:gap-0 relative">
          {/* Connecting line behind cards (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-border z-0" />

          {agents.map((agent, i) => (
            <div key={i} className="relative z-10 px-3 mb-8 md:mb-0">
              <div className="bg-card p-8 rounded-2xl border border-border shadow-card space-y-4 h-full">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl gradient-primary shrink-0">
                    <agent.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{agent.step}</span>
                    <h3 className="text-lg font-bold text-secondary leading-tight">{agent.name}</h3>
                  </div>
                </div>
                <div className="inline-flex px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {agent.role}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{agent.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 italic">
          Human-in-the-loop when it matters. Fully autonomous when it doesn't.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
