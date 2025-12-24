import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const navigate = useNavigate(); // <-- Initialize navigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/raphyrenu", color: "hover:text-primary" },
    { icon: FaWhatsapp, label: "WhatsApp", href: "whatsapp://send?phone=+250792672810", color: "hover:text-primary" },
    { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/r.a.p.h.a.e", color: "hover:text-primary" },
    { icon: Mail, label: "Email", href: "mailto:raphaelnibishaka@gmail.com", color: "hover:text-primary" },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Button
            onClick={() => navigate("/")}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Back to Home
          </Button>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass border-primary/20 animate-slideIn">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary transition-all"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary transition-all"
                />
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background/50 border-primary/20 focus:border-primary transition-all resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground box-glow"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-slideIn" style={{ animationDelay: "0.2s" }}>
            <Card className="glass border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Connect With Me</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech and security!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-lg border border-primary/20 hover:border-primary transition-all hover:scale-105 ${link.color} group`}
                    >
                      <link.icon className="w-6 h-6" />
                      <span className="font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Available for Opportunities</h3>
                <p className="text-muted-foreground">
                  I'm currently open to new opportunities in software development and cybersecurity. If you have an exciting project or position, let's talk!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
