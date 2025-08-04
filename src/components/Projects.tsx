import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart IoT Control System",
      description: "Developed an intelligent IoT system for automated building management with real-time monitoring and energy optimization.",
      tags: ["IoT", "Python", "Arduino", "React", "MongoDB"],
      status: "Completed",
      image: "🏢"
    },
    {
      title: "Machine Learning Pipeline",
      description: "Built a scalable ML pipeline for predictive maintenance in manufacturing environments, reducing downtime by 40%.",
      tags: ["Machine Learning", "Python", "TensorFlow", "Docker", "AWS"],
      status: "Completed",
      image: "🤖"
    },
    {
      title: "Robotics Automation Framework",
      description: "Designed and implemented a comprehensive robotics framework for automated warehouse operations.",
      tags: ["Robotics", "C++", "ROS", "Computer Vision", "Linux"],
      status: "In Progress",
      image: "🦾"
    },
    {
      title: "Renewable Energy Optimizer",
      description: "Created an optimization algorithm for solar panel positioning and energy storage management systems.",
      tags: ["Optimization", "MATLAB", "Simulink", "Energy Systems"],
      status: "Completed",
      image: "⚡"
    },
    {
      title: "Advanced Signal Processing Tool",
      description: "Developed a real-time signal processing application for noise reduction in communication systems.",
      tags: ["Signal Processing", "C++", "MATLAB", "DSP", "Real-time"],
      status: "Completed",
      image: "📡"
    },
    {
      title: "Autonomous Vehicle Simulation",
      description: "Built a comprehensive simulation environment for testing autonomous vehicle algorithms and safety systems.",
      tags: ["Simulation", "Python", "OpenCV", "AI", "Autonomous Systems"],
      status: "In Progress",
      image: "🚗"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative engineering solutions and technical achievements across various domains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" ? "bg-primary text-primary-foreground" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs border-primary/20 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/5"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/5"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;