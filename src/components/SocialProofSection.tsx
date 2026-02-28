const SocialProofSection = () => {
  return (
    <section className="py-16 md:py-20 border-y border-border">
      <div className="container max-w-6xl mx-auto px-4 space-y-10">
        <p className="text-center text-sm font-medium text-muted-foreground tracking-wide uppercase">
          Trusted by forward-thinking specialty pharmacies
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
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary/30 pl-6 text-left">
            "[Customer quote about time savings or revenue impact]"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
