import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="w-full h-full flex">
        {/* Left Side - Dark with Name and Content */}
        <div className="w-1/2 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-center px-12 lg:px-16">
            <div className="animate-fade-in">
              {/* Name */}
              <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-none">
                Isaiah
                <span className="block">King</span>
              </h1>
              
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-lg leading-relaxed">
                  Welcome to my personal portfolio! This site showcases a collection of my projects I have finish and am currently working on. It also provides a complete overview of the tools, frameworks, and skills I have expereince in.
                </p>
              </div>
              
              {/* Action Button */}
              <div className="mt-8">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-fit"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Large Portrait */}
        <div className="w-1/2 relative overflow-hidden">
          <img 
            src="/lovable-uploads/4e5e16c2-9872-466f-a72f-6133a4b2d253.png"
            alt="Isaiah King Portrait" 
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/10" />
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;