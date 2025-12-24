import { Github,Mail } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // ✅ Added

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const social = [
    // Multiple GitHub accounts
    { name: "GitHub 1", icon: Github, href: "https://github.com/raphyrenu" },
    { name: "GitHub 2", icon: Github, href: "https://github.com/raphael-nibishaka" },
    { name: "GitHub 3", icon: Github, href: "https://github.com/rnibishaka" },

    // Other socials
    { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/r.a.p.h.a.e" },
      { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/+250792672810" },
    { name: "Mail", icon: Mail, href: "mailto:raphaelnibishaka@gmail.com" },
    ];

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-3">
              Nibishaka Raphael
            </h3>
            <p className="text-sm text-muted-foreground">
              Fullstack & Cybersecurity Engineer dedicated to building secure, scalable digital solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>

            {/* Socials with separators */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {social.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                    aria-label={item.name}
                  >
                    <item.icon className="w-5 h-5" />
                  </a>
                  {/* Add separator except after last item */}
                  {index < social.length - 1 && (
                    <span className="text-muted-foreground mx-2 select-none">|</span>
                  )}
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              Follow me for updates on projects and tech insights
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nibishaka Raphael. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
