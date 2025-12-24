import {
  Palette,
  Server,
  Shield,
  Puzzle,
  Smartphone,
  Workflow,
  Database,
  Code2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    {
      icon: Palette,
      title: "Frontend Development",
      description:
        "React, Next.js, Tailwind CSS, TypeScript — Crafting fast, modern, and responsive UIs.",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Node.js, Express, NestJS, Laravel, Spring Boot — Building secure and scalable APIs.",
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "MySQL, PostgreSQL, MongoDB, Redis, Prisma — Efficient data storage and optimization.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Penetration Testing, Vulnerability Scanning, Secure Code Review — Ensuring digital resilience.",
    },
    {
      icon: Puzzle,
      title: "API Integration",
      description:
        "RESTful APIs, GraphQL, WebSockets — Connecting systems seamlessly and securely.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Mobile-first, Cross-Browser Compatibility, Accessibility — Perfect across all screens.",
    },
    {
      icon: Workflow,
      title: "System Automation & DevOps",
      description:
        "Docker, Jenkins, CI/CD, GitHub Actions, Terraform — Streamlining development workflows.",
    },
    {
      icon: Code2,
      title: "Programming Languages",
      description:
        "JavaScript, TypeScript, PHP, Java, Python, Go — Writing clean, maintainable, and efficient code.",
    },
  ];

  const tools = [
    // 🧠 Programming Languages
    "JavaScript", "TypeScript", "Python", "Java", "Go", "PHP", "C#", "Bash", "PowerShell",

    // 🎨 Frontend
    "React", "Next.js", "Tailwind CSS", "Vite", "Redux", "Zustand", "Axios", "Framer Motion", "Shadcn/UI",

    // ⚙️ Backend
    "Node.js", "Express.js", "NestJS", "Laravel", "Spring Boot", "GraphQL", "tRPC", "FastAPI", "Socket.IO",

    // 💾 Databases
    "MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "Prisma", "Supabase", "Firebase Firestore",

    // ☁️ Cloud & Deployment
    "AWS", "Google Cloud", "Azure", "Vercel", "Netlify", "Render", "DigitalOcean", "Docker", "Kubernetes", "Terraform",

    // 🧩 DevOps / Automation
    "Git", "GitHub", "GitLab", "Jenkins", "GitHub Actions", "CI/CD", "Docker Compose",

    // 🔒 Cybersecurity
    "Burp Suite", "Wireshark", "Metasploit", "Nmap", "OWASP ZAP", "Kali Linux", "Hashcat", "John the Ripper",

    // 🛠️ Tools & Productivity
    "VS Code", "Postman", "Figma", "Canva", "Notion", "Jira", "Slack", "Trello", "Obsidian",
  ];

  return (
    <section id="skills" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A strong mix of full-stack development, database design, DevOps, and cybersecurity expertise.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group gradient-border rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Moving Tools Section */}
        <div className="mt-16 text-center relative">
          <h3 className="text-2xl font-semibold mb-6">Tools & Technologies</h3>

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-3 animate-marquee whitespace-nowrap">
              {[...tools, ...tools].map((tool, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm border-primary/30 hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
