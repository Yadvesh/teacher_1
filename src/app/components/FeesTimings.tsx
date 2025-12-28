import { IndianRupee, Clock, Info } from "lucide-react";
import { Card } from "./ui/card";

export function FeesTimings() {
  const feeOptions = [
    {
      title: "Group Classes",
      range: "₹2,500 - ₹3,500",
      duration: "per month",
      features: ["Small batch (5-8 students)", "2 hours/day", "5-6 days/week"],
    },
    {
      title: "Individual Classes",
      range: "₹5,000 - ₹7,000",
      duration: "per month",
      features: ["One-on-one attention", "Flexible timings", "Customized pace"],
      popular: true,
    },
  ];

  const timings = [
    { slot: "Morning Batch", time: "6:00 AM - 8:00 AM", days: "Monday to Saturday" },
    { slot: "Evening Batch 1", time: "5:00 PM - 7:00 PM", days: "Monday to Saturday" },
    { slot: "Evening Batch 2", time: "6:00 PM - 8:00 PM", days: "Monday to Saturday" },
  ];

  return (
    <section id="fees-section" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl text-foreground mb-2">Fees & Timings</h2>
          <p className="text-muted-foreground">Affordable and flexible options</p>
        </div>

        {/* Fee Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {feeOptions.map((option, index) => (
            <Card key={index} className={`p-6 relative ${option.popular ? 'border-2 border-primary shadow-lg' : ''}`}>
              {option.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <div className="space-y-4">
                <h3 className="text-foreground">{option.title}</h3>
                <div className="flex items-baseline gap-2">
                  <IndianRupee className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-semibold text-primary">{option.range}</span>
                  <span className="text-sm text-muted-foreground">/ {option.duration}</span>
                </div>
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Timings */}
        <Card className="p-6 bg-blue-50 border-primary/30">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <h3 className="text-foreground">Class Timings</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {timings.map((timing, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-border">
                <p className="font-medium text-foreground mb-1">{timing.slot}</p>
                <p className="text-sm text-primary">{timing.time}</p>
                <p className="text-xs text-muted-foreground mt-1">{timing.days}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Note */}
        <div className="mt-6 flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <Info className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Fees may vary based on class and subjects. Please call to confirm exact fees for your requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
