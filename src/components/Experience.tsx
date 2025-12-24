import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const timeline = [
    {
      icon: GraduationCap,
      title: "Computer Science",
      organization: "Rwanda coding Academy",
      period: "2020 - Now",
      description:"Pursuing in Computer Science with focus on software engineering and cybersecurity and Cybersecurity",
      type: "education",
      },
    {
    icon: Briefcase,
    title: "Backend Developer",
    organization: "KIVUNOVA Ltd",
    period: "2024 - Now",
    description: "Developing backend applications using Java Spring Boot, designing APIs, and managing database integrations",
    type: "work",
  },
    {
      icon: Briefcase,
      title: "Cybersecurity Intern",
      organization: "Tech Company",
      period: "2023 - 2024",
      description:
        "Conducted security assessments, vulnerability testing, and implemented security best practices",
      type: "work",
    },
    {
      icon: Briefcase,
      title: "Fullstack Developer",
      organization: "Code Alpha",
      period: "2022 - 2023",
      description:
        "Developed and maintained web applications using React, Node.js, and PostgreSQL",
      type: "work",
    },
    {
      icon: Award,
      title: "Open Sources  ",
      organization: "Various Projects",
      period: "2021 - Now",
      description:
        "Active contributor to open-source security tools and web development frameworks",
      type: "achievement",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Experience & Education
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slideUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-card rounded-full border-2 border-primary flex items-center justify-center box-glow z-10">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-16 pl-24" : "md:pl-16 pl-24"
                  }`}
                >
                  <Card className="glass border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                    <CardContent className="p-6">
                      <div
                        className={`flex items-start justify-between mb-2 ${
                          index % 2 === 0 ? "" : "flex-row-reverse"
                        }`}
                      >
                        <h3 className="text-xl font-semibold gradient-text">{item.title}</h3>
                        <span className="text-sm text-primary font-medium whitespace-nowrap ml-2">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-medium mb-2">
                        {item.organization}
                      </p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
