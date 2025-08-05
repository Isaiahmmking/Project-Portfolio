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
                <h2 className="text-2xl font-semibold mb-4 border-b border-primary-foreground/20 pb-2">
                  Introduction:
                </h2>
                <p className="text-lg leading-relaxed mb-8">
                  This is my personal portfolio. Here, I have organized
                  all of my projects based on content, software and
                  curricular relation
                </p>
              </div>
              
              {/* How to use */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b border-primary-foreground/20 pb-2">
                  How to use this page:
                </h2>
                <p className="text-lg leading-relaxed">
                  On the left, click on the topic/skill you are interested
                  in viewing and you will automatically be directed to
                  various projects where these skills apply
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
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop&crop=face"
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