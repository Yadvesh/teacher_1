import { Star, Quote } from "lucide-react";
import { Card } from "./ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Mrs. Sharma",
      relation: "Mother of Class 9 Student",
      text: "My son's marks improved from 65% to 88% in just 6 months. The personal attention and regular tests made all the difference.",
      rating: 5,
    },
    {
      name: "Mr. Patel",
      relation: "Father of Class 8 Student",
      text: "Excellent teaching methods. The teacher explains concepts very clearly and my daughter now enjoys studying Maths and Science.",
      rating: 5,
    },
    {
      name: "Mrs. Reddy",
      relation: "Mother of Class 10 Student",
      text: "Very satisfied with the classes. Regular parent updates and doubt sessions helped my son prepare well for board exams.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl text-foreground mb-2">What Parents Say</h2>
          <p className="text-muted-foreground">Trusted by hundreds of parents</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground text-sm italic">"{testimonial.text}"</p>

                {/* Parent info */}
                <div className="pt-3 border-t border-border">
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.relation}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Results section */}
        <div className="mt-10 text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-primary/30">
            <h3 className="text-foreground mb-4">Our Results Speak</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-3xl font-semibold text-primary">95%</p>
                <p className="text-sm text-muted-foreground mt-1">Students Improved</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-primary">8+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-primary">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Students Taught</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Pass Rate</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
