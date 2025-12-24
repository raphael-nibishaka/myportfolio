import { Card, CardContent } from "@/components/ui/card";
import { Code2, Shield, Lightbulb, Rocket } from "lucide-react";

const AboutMe = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Fullstack Development",
      description: "Building scalable web applications with modern frameworks and best practices",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Securing systems and applications against modern threats and vulnerabilities",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical thinking and innovative solutions to complex technical challenges",
    },
    {
      icon: Rocket,
      title: "Continuous Learning",
      description: "Always exploring new technologies and staying updated with industry trends",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slideIn">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate software engineer and cybersecurity enthusiast with a strong
              foundation in both offensive and defensive security practices. My journey in
              technology is driven by curiosity and a commitment to building secure, efficient, and
              innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise spanning from frontend development with React and Next.js to backend
              systems and security implementations, I bring a holistic approach to software
              development. I believe in writing clean, maintainable code while never compromising on
              security.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing opportunities to contribute to impactful projects and collaborate
              with talented teams to push the boundaries of what's possible in tech.
            </p>
          </div>

          <div className="relative">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full box-glow flex items-center justify-center animate-glow">
              <div className="w-56 h-56 bg-card rounded-full flex items-center justify-center">
                <Code2 className="w-24 h-24 text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="glass border-primary/20 hover:border-primary/50 transition-all hover:scale-105 animate-slideUp group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
