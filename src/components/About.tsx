import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const highlights = [
    {
      number: "3+",
      label: "Years Experience"
    },
    {
      number: "50+",
      label: "Projects Completed"
    },
    {
      number: "15+",
      label: "Technologies Mastered"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1">
              <div className="relative max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-hover hover-lift bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                  <img 
                    src={profilePhoto} 
                    alt="Alex Johnson - Software Developer"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-6">
                Passionate Developer & Problem Solver
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 3 years of experience in software development, I specialize in creating 
                  robust, scalable web applications that deliver exceptional user experiences. My 
                  journey began with a fascination for how code can solve real-world problems.
                </p>
                <p>
                  I'm proficient in modern technologies including React, Node.js, and various 
                  databases. I believe in writing clean, maintainable code and staying up-to-date 
                  with the latest industry trends and best practices.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, 
                  learning new technologies, or mentoring aspiring developers in the community.
                </p>
              </div>

              {/* Career Highlights */}
              <div className="mt-8 grid grid-cols-3 gap-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                      {highlight.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {highlight.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;