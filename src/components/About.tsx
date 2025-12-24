import { Target, Zap, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Solving Real Problems",
      description: "Addressing practical digital challenges with innovative, scalable solutions that deliver measurable impact."
    },
    {
      icon: Zap,
      title: "Modern Applications",
      description: "Creating cutting-edge web applications using the latest technologies and best development practices."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Bridging development and cybersecurity to build robust, secure, and reliable digital solutions."
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Who I Am & <span className="gradient-text">What I Solve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group gradient-border rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
