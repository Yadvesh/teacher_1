import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What are the fees for tuition classes?",
      answer: "Fees range from ₹2,500 to ₹7,000 per month depending on whether you choose group classes or individual classes. Group classes (5-8 students) are ₹2,500-₹3,500/month, while individual one-on-one classes are ₹5,000-₹7,000/month. Please call us for exact fees based on your requirements.",
    },
    {
      question: "Is a free demo class available?",
      answer: "Yes! We offer a free demo class so students and parents can experience our teaching methods before making a decision. This helps students understand our approach and feel comfortable. Call us to schedule your free demo class.",
    },
    {
      question: "What is the batch size?",
      answer: "We maintain small batch sizes of 5-8 students in group classes to ensure personal attention to each student. This allows us to track individual progress and address specific doubts. For those who prefer, we also offer one-on-one individual classes.",
    },
    {
      question: "Do you cover the complete CBSE/State Board syllabus?",
      answer: "Yes, we provide complete syllabus coverage for both CBSE and State Board for Classes 6 to 10. Our teaching includes NCERT textbooks, reference materials, regular tests, and exam-focused preparation to ensure students are fully prepared.",
    },
    {
      question: "What if my child misses a class?",
      answer: "If a student misses a class, we provide notes and materials covered during that session. We also conduct regular doubt-solving sessions where students can clear any concepts they missed. For individual classes, we offer flexible rescheduling options.",
    },
    {
      question: "How do you communicate with parents?",
      answer: "We provide regular updates to parents about their child's progress, performance in tests, and areas needing improvement. Parents can also reach out to us anytime to discuss their child's performance or any concerns.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl text-foreground mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions from parents</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-white hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Still have questions?{" "}
              <a href="tel:+919876543210" className="text-primary hover:underline font-medium">
                Call us now
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
