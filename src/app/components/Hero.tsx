import { Award, Users, ClipboardCheck, MessageCircle, Clock, BookOpen, GraduationCap, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function Hero() {
  const trustBadges = [
    { icon: Award, text: "8+ Years Experience" },
    { icon: Users, text: "Small Batches" },
    { icon: ClipboardCheck, text: "Weekly Tests" },
    { icon: MessageCircle, text: "Doubt Sessions" },
  ];

  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side - Main content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
                Clear concepts. Better marks.
              </h1>
              <p className="text-lg text-muted-foreground">
                Personal attention, weekly tests, and doubt-solving for Classes 6–10.
              </p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 py-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-border">
                  <badge.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                onClick={() => window.location.href = 'tel:+919876543210'}
              >
                Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                onClick={() => document.getElementById('fees-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Fee & Timings
              </Button>
            </div>
          </div>

          {/* Right side - Info card */}
          <Card className="p-6 space-y-4 shadow-lg border-2 border-primary/20">
            <h3 className="text-primary pb-2 border-b border-border">Class Information</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Timings</p>
                  <p className="text-foreground">Morning: 6:00 AM - 8:00 AM</p>
                  <p className="text-foreground">Evening: 5:00 PM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Subjects</p>
                  <p className="text-foreground">Mathematics & Science</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Classes</p>
                  <p className="text-foreground">6th to 10th (CBSE + State Board)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">[Area], [City], India</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-primary font-medium">✓ Free Demo Class Available</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
