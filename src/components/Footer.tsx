import { Github, Linkedin, Twitter, Heart, Boxes  } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/20honeyDee",
      color: "hover:text-gray-800"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/honeydeeeslera/",
      color: "hover:text-blue-600"
    },
    {
      name: "Replit",
      icon: Boxes,
      url: "https://replit.com/@pluviophile",
      color: "hover:text-blue-400"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
                Portfolio
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Full-stack developer passionate about creating exceptional digital experiences 
                through clean code and innovative solutions.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(social.url, '_blank')}
                    className="w-10 h-10 bg-background border rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-smooth hover-lift"
                  >
                    <social.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold mb-4">Get in Touch</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Cavite, Philippines, 4102</p>
                <p>eslerahoneydee@gmail.com</p>
                <p>+63 939-3878-272</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Honey Dee Eslera. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;