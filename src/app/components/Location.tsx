import { MapPin, Navigation } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function Location() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl text-foreground mb-2">Find Us</h2>
          <p className="text-muted-foreground">Easy to locate in [Area], [City]</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Map placeholder */}
          <Card className="p-0 overflow-hidden">
            <div className="w-full h-64 md:h-full bg-gray-200 flex items-center justify-center relative">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Card>

          {/* Address details */}
          <Card className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    [Teacher Name] Tuition Classes<br />
                    [Building/House No], [Street Name]<br />
                    [Area], [City] - [PIN Code]<br />
                    India
                  </p>
                  <p className="text-sm text-primary mt-2">
                    Near [Landmark - School/Temple/Market]
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="text-foreground mb-3">How to Reach</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>By Bus: Route numbers [123, 456] stop nearby</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>By Metro: [Station Name] - 10 min walk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>By Auto/Car: Easy parking available</span>
                  </li>
                </ul>
              </div>
            </div>

            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://maps.google.com', '_blank')}
            >
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
