import { Search, Lightbulb, Code, Rocket } from "lucide-react";

const Workflow = () => {
  const steps = [
    {
      icon: Search,
      title: "Understanding",
      description: "Deep dive into project requirements and client needs"
    },
    {
      icon: Lightbulb,
      title: "Planning",
      description: "Strategic planning and prototyping for optimal results"
    },
    {
      icon: Code,
      title: "Development",
      description: "Clean code implementation with modern tech stack"
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "Testing, deployment, and ongoing maintenance"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined process focused on efficiency, quality, and results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-50 animate-glow" />
                  <div className="relative bg-card border border-border w-20 h-20 rounded-full flex items-center justify-center">
                    <step.icon className="w-9 h-9 text-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-primary">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
