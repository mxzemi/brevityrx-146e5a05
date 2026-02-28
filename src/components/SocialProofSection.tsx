const SocialProofSection = () => {
  return (
    <section className="py-16 md:py-20 border-y border-border">
      <div className="container max-w-6xl mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground tracking-wide uppercase mb-10">
          Trusted by leading specialty pharmacies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-28 h-10 rounded-lg bg-muted/70 flex items-center justify-center"
            >
              <span className="text-xs text-muted-foreground/50 font-medium">Logo {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
