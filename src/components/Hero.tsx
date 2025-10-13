import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  //function to download resume
  const downloadResume = () => {
    alert("Resume download would start here!");
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Introduction */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-primary bg-clip-text text-transparent">
                Honey Dee Eslera
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              Full-Stack Software Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I create modern, scalable web applications using cutting-edge technologies. 
              Passionate about clean code, user experience, and solving complex problems.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              variant="hero" 
              size="lg"
              onClick={downloadResume}
              className="font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="font-medium border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;