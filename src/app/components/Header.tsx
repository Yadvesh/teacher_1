import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo placeholder */}
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white">T</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-semibold text-foreground">[Teacher Name]</p>
            <p className="text-xs text-muted-foreground">Tuition Classes</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">+91 98765 43210</span>
          </a>
          
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => window.location.href = 'tel:+919876543210'}
          >
            Call Now
          </Button>
        </div>
      </div>
    </header>
  );
}
