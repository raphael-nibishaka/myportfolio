import { ExternalLink, Github, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  tech: string[];
  liveDemoLink: string;
  githubLink: string;
  category: string;
  gradient: string;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);

  const { data: projects = [], isLoading, isError } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetch('https://portifolio-cts1.onrender.com/api/projects');
      if (!response.ok) throw new Error('Failed to fetch projects');
      return response.json();
    }
  });

  const categories = ["all", ...new Set(projects.map(project => project.category))];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  const hasMoreProjects = filteredProjects.length > 3;

  if (isLoading) {
    return (
      <section id="projects" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[400px]">
          <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section id="projects" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-destructive">Error loading projects. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My Work & <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Featured projects showcasing my technical expertise and problem-solving abilities
          </p>

          <ToggleGroup
            type="single"
            value={activeCategory}
            onValueChange={(value) => value && setActiveCategory(value)}
            className="justify-center flex-wrap"
          >
            {categories.map((category) => (
              <ToggleGroupItem
                key={category}
                value={category}
                className="px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground capitalize"
              >
                {category}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id || index}
              className="group gradient-border rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative z-10 bg-gradient-to-br ${project.gradient} p-8 h-full flex flex-col`}>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-primary mb-2">Role:</div>
                  <div className="text-sm text-foreground/90">{project.role}</div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-primary mb-2">Tech Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-secondary/50 border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.liveDemoLink && (
                    <Button size="sm" variant="outline" className="flex-1 relative z-20" asChild>
                      <a
                        href={project.liveDemoLink.startsWith('http') ? project.liveDemoLink : `https://${project.liveDemoLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button size="sm" variant="outline" className="flex-1 relative z-20" asChild>
                      <a
                        href={project.githubLink.startsWith('http') ? project.githubLink : `https://${project.githubLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="border-border hover:bg-secondary/50"
            >
              {showAll ? "View Less" : "View More Projects"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
