import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Square Grid Background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(0deg, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px",
                    backgroundColor: "#02001a",
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
                        <Code2 className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Available for new opportunities</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        I'm{" "}
                        <span className="gradient-text">
                            Raphael NIBISHAKA
                        </span>
                        <br />
                        <span className="text-foreground/90">
                            Fullstack & Cybersecurity Engineer
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                        Building modern web applications & impactful digital solutions with expertise in development and security.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            className="group bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[length:100%_100%] transition-all duration-500 glow-effect"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View My Work
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-border hover:bg-secondary/50"
                            onClick={() => navigate('/contact')}
                        >
                            Contact Me
                        </Button>
                    </div>
                </div>
            </div>
            <button
                onClick={() =>
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none transition-transform duration-300 hover:scale-110"
                aria-label="Scroll to about section"
            >
                <ChevronDown className="w-8 h-8 text-cyan-400 drop-shadow-lg" />
            </button>
        </section>
    );
};

export default Hero;
