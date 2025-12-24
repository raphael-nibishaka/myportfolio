import { Button } from "@/components/ui/button";
import { Mail, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Build Something{" "}
            <span className="gradient-text">
              Amazing Together
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative projects and help bring your ideas to life.
            Whether you need a developer, security consultant, or technical partner, let's connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[length:100%_100%] transition-all duration-500 glow-effect"
              onClick={() => navigate('/contact')}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Hire Me
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary/50"
              onClick={() => navigate('/contact')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
          </div>

          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-muted-foreground mb-4">Prefer email?</p>
            <a
              href="mailto:contact@nibishaka.dev"
              className="text-primary hover:text-accent transition-colors text-lg font-medium"
            >
              raphaelnibishaka@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
