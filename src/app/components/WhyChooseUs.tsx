import { Users, ClipboardCheck, MessageCircle, BookCheck, Bell, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Users,
      title: "Personal Attention",
      description: "Small batch sizes ensure every student gets individual focus",
    },
    {
      icon: ClipboardCheck,
      title: "Regular Tests",
      description: "Weekly tests to track progress and identify weak areas",
    },
    {
      icon: MessageCircle,
      title: "Doubt Solving",
      description: "Dedicated sessions to clear all doubts before exams",
    },
    {
      icon: BookCheck,
      title: "Exam-Focused Notes",
      description: "Comprehensive notes aligned with CBSE and State Board syllabus",
    },
    {
      icon: Bell,
      title: "Parent Updates",
      description: "Regular communication about student performance and progress",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Consistent improvement in marks and conceptual understanding",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl text-foreground mb-2">Why Parents Choose Us</h2>
          <p className="text-muted-foreground">Quality education with proven results</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
