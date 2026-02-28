import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="BrevityRx" className="h-6 w-6" />
          <span className="font-semibold text-secondary">BrevityRx</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-secondary transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BrevityRx. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
