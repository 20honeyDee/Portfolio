import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Road Maestro",
      description: "Road Maestro is a web-based learning platform designed to teach the fundamentals of driving. It provides comprehensive lessons on essential driving concepts, including car parts, road signs, and traffic laws, helping users build a strong foundation before getting behind the wheel.",
      image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      techStack: ["React", "TypeScript", "Material UI", "TailwindCSS", "HTML5", "CSS3"],
      github: "https://github.com/20honeyDee/RoadMaestro",
      live: "https://road-maestro.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Banking System",
      description: `A banking system with user creation, withdrawal, deposit, and option to create user's savings account with a certain savings interest functionalities. Built with .Net Core, C#, and winforms. ${<br/>} Note: Demo Video in Google Drive`,
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      techStack: ["C#", ".Net Core", "Windows Form"],
      github: "https://github.com/20honeyDee/Banking-System",
      live: "https://demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Airline Ticketing System",
      description: `Airline Ticketing System is a Java-based application that enables users to book airline tickets online. It streamlines the flight reservation process by allowing users to search for available flights, view schedules, and securely book tickets, making air travel planning faster and more convenient. ${<br/>} Note: Demo Video in Google Drive`,
      image: "https://images.unsplash.com/photo-1610642372677-bcddb69f3531?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      techStack: ["Java"],
      github: "https://github.com/20honeyDee/Airline-Ticketing-System",
      live: "https://demo.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work and technical expertise
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group hover-lift shadow-card overflow-hidden ${
                  project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>

                <CardContent className="p-6">
                    {/* Project Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-2 text-sm">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Watch Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://github.com/20honeyDee?tab=repositories', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;