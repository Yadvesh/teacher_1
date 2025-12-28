import { useState } from "react";
import { MessageCircle, X, Phone, Clock, MapPin, BookOpen, IndianRupee } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const quickReplies = [
    { label: "Fees", icon: IndianRupee, action: () => document.getElementById('fees-section')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Timings", icon: Clock, action: () => document.getElementById('fees-section')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Demo", icon: BookOpen, action: () => window.location.href = 'tel:+919876543210' },
    { label: "Location", icon: MapPin, action: () => window.open('https://maps.google.com', '_blank') },
    { label: "Subjects", icon: BookOpen, action: () => window.scrollTo({ top: 600, behavior: 'smooth' }) },
  ];

  return (
    <>
      {/* Chat panel */}
      {isOpen && (
        <Card className="fixed bottom-24 md:bottom-20 right-4 w-80 max-w-[calc(100vw-2rem)] shadow-xl z-50 animate-in slide-in-from-bottom-5">
          <div className="bg-primary text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Quick Help</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-3">
            <p className="text-sm text-muted-foreground mb-3">How can we help you today?</p>
            
            <div className="grid grid-cols-2 gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => {
                    reply.action();
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-2 p-3 border border-border rounded-lg hover:bg-primary/10 hover:border-primary transition-colors text-left"
                >
                  <reply.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{reply.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-border">
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => {
                  window.location.href = 'tel:+919876543210';
                  setIsOpen(false);
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Floating button with pulse animation */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 md:bottom-6 right-4 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center group"
        aria-label="Open chat"
      >
        {/* Heartbeat ripple animation rings - only show when chat is closed */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-primary animate-ripple-1"></span>
            <span className="absolute inset-0 rounded-full bg-primary animate-ripple-2"></span>
          </>
        )}
        
        {/* Icon */}
        <MessageCircle className="w-6 h-6 relative z-10" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Ask
        </span>
      </button>

      <style>{`
        @keyframes heartbeat-ripple {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.15;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
        
        .animate-ripple-1 {
          animation: heartbeat-ripple 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-ripple-2 {
          animation: heartbeat-ripple 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation-delay: 0.4s;
        }
      `}</style>
    </>
  );
}