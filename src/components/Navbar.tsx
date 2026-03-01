import logoHorizontal from "@/assets/logo-horizontal.png";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Why BrevityRx", href: "#competitive" },
  { label: "Who It's For", href: "#personas" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 max-w-6xl mx-auto px-4">
        <a href="#" className="flex items-center">
          <img src={logoHorizontal} alt="BrevityRx" className="h-9" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="gradient-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
