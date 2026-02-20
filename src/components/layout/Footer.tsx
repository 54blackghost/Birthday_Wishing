import { Cake } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-muted/30 py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold">
          <Cake className="h-5 w-5 text-primary" />
          <span className="text-gradient">BirthdayWish</span>
        </Link>
        <p className="text-sm text-muted-foreground">© 2026 BirthdayWish. Made with 🎂 and ❤️</p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span className="hover:text-foreground cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">Terms</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">Contact</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
