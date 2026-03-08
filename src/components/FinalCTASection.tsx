import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const FinalCTASection = () => {
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
    <section id="waitlist" className="py-20 md:py-28">
      <div className="container max-w-3xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
          Stop Losing Revenue to{" "}
          <span className="text-accent-rose">Paperwork.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Join the waitlist and be first to put prior auth on autopilot.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
      </div>
    </section>
  );
};

export default FinalCTASection;
