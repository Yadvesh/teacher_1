import { Phone, IndianRupee, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-lg md:hidden">
      <div className="grid grid-cols-3 gap-2 p-2">
        <Button
          variant="outline"
          className="flex flex-col items-center gap-1 h-auto py-2 px-2"
          onClick={() => window.location.href = 'tel:+919876543210'}
        >
          <Phone className="w-5 h-5 text-primary" />
          <span className="text-xs">Call</span>
        </Button>

        <Button
          variant="outline"
          className="flex flex-col items-center gap-1 h-auto py-2 px-2"
          onClick={() => document.getElementById('fees-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <IndianRupee className="w-5 h-5 text-primary" />
          <span className="text-xs">Fees</span>
        </Button>

        <Button
          variant="outline"
          className="flex flex-col items-center gap-1 h-auto py-2 px-2"
          onClick={() => window.open('https://maps.google.com', '_blank')}
        >
          <MapPin className="w-5 h-5 text-primary" />
          <span className="text-xs">Location</span>
        </Button>
      </div>
    </div>
  );
}
