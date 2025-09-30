import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "JavaScript", level: 95, icon: "💛" },
        { name: "HTML/CSS", level: 90, icon: "🎨" },
        { name: "Tailwind CSS", level: 85, icon: "🌊" },
        { name: "Next.js", level: 80, icon: "▲" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "PHP", level: 75, icon: "🐘" },
        { name: "Express.js", level: 85, icon: "🚂" },
        { name: "REST APIs", level: 90, icon: "🔗" },
        { name: "GraphQL", level: 70, icon: "📊" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "MySQL", level: 75, icon: "🗄️" },
        { name: "Git", level: 90, icon: "🌳" },
        { name: "Docker", level: 70, icon: "🐋" },
        { name: "AWS", level: 65, icon: "☁️" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="hover-lift shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium text-sm">{skill.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className="h-full gradient-primary transition-all duration-1000 ease-out group-hover:animate-pulse"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-4">Also experienced with:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Redux", "Jest", "Webpack", "Sass", "Firebase", "Stripe", "Socket.io", "WordPress"].map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary hover:text-white transition-smooth cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;