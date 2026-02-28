import { useState } from "react";
import { toast } from "sonner";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    setTimeout(() => {
      toast.success("You're on the list! We'll be in touch soon.");
      setEmail("");
      setSubmitting(false);
    }, 600);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 gradient-hero overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Autonomous Prior Authorization
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight tracking-tight">
              The right clinical proof.{" "}
              <span className="text-primary">The first time.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              BrevityRx uses agentic AI to eliminate prior authorization delays — cutting approval timelines from{" "}
              <strong className="text-foreground">weeks to under 48 hours</strong>.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
              <button
                type="submit"
                disabled={submitting}
                className="gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 whitespace-nowrap"
              >
                {submitting ? "Joining…" : "Join the Waitlist"}
              </button>
            </form>
            <p className="text-xs text-muted-foreground">No spam. Early access for specialty pharmacies & health systems.</p>
          </div>
          <div className="hidden md:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <img
              src={heroIllustration}
              alt="Automated prior authorization workflow"
              className="w-full max-w-lg mx-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
