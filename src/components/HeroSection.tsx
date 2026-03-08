import { useState } from "react";
import { toast } from "sonner";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("entry.562743024", email);
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSe0fgh-rWpcjD2JgrR7fG0P31pEDh553y9Lk6Zk_XZ7XJGmLQ/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );
      toast.success("You're on the list! We'll be in touch soon.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          {/* Left: Copy */}
          <div className="flex-1 space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Autonomous Prior Authorization
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight tracking-tight">
              The right clinical proof.{" "}
              <span className="text-primary">The first time.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Specialty medications cost $38,000+ per patient per year and represent over 50% of US pharmacy spend — yet 37–40% of denied prescriptions are abandoned entirely because the PA process is broken. BrevityRx is an autonomous AI agent that sits between your EMR and the payor portal. It pulls the exact clinical evidence needed and submits a bulletproof PA request — before your team even opens a fax machine.
            </p>
            <p className="text-xl md:text-2xl font-bold text-secondary">
              10–30+ days → under 48 hours.{" "}
              <span className="text-primary">Automatically.</span>
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

          {/* Right: Hero Illustration */}
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in">
            <img
              src={heroIllustration}
              alt="BrevityRx autonomous workflow — document flows through AI processing to approval"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
