import { Calculator, FlaskConical, HeartHandshake } from "lucide-react";
import { Card } from "./ui/card";

export function SubjectsSection() {
  const subjects = [
    {
      icon: Calculator,
      title: "Mathematics",
      points: [
        "Complete syllabus coverage",
        "Step-by-step problem solving",
        "Practice worksheets",
        "Exam-focused questions",
        "Mental math techniques",
      ],
    },
    {
      icon: FlaskConical,
      title: "Science",
      points: [
        "Physics, Chemistry, Biology",
        "Conceptual clarity",
        "Diagram practice",
        "Practical explanations",
        "NCERT & reference books",
      ],
    },
    {
      icon: HeartHandshake,
      title: "Student Support",
      points: [
        "Personal attention",
        "Doubt solving sessions",
        "Regular parent updates",
        "Progress tracking",
        "Exam preparation tips",
      ],
    },
  ];

  return (
    <section id="subjects-section" className="scroll-mt-20 py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl text-foreground mb-2">Subjects & Classes</h2>
          <p className="text-muted-foreground">Comprehensive learning for Classes 6-10</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <subject.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-foreground">{subject.title}</h3>
                <ul className="space-y-2 text-left w-full">
                  {subject.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
