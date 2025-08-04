import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import { 
  curricularProjects, 
  extracurricularProjects, 
  allProjects, 
  getAllTags,
  type Project 
} from "@/data/projects";

const Projects = () => {
  const [selectedSkill, setSelectedSkill] = useState("All");

  // Extract all unique skills from projects
  const allSkills = getAllTags();

  const getFilteredProjects = (projects: typeof allProjects) => {
    if (selectedSkill === "All") return projects;
    return projects.filter(project => project.tags.includes(selectedSkill));
  };

  const ProjectGrid = ({ projects }: { projects: typeof allProjects }) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card 
          key={`${project.category}-${index}`}
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
                <Badge 
                  key={tagIndex} 
                  variant="outline" 
                  className={`text-xs cursor-pointer transition-colors ${
                    selectedSkill === tag 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "border-primary/20 text-primary hover:bg-primary/10"
                  }`}
                  onClick={() => setSelectedSkill(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-3">
              <Button 
                size="sm" 
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => project.demoUrl && window.open(project.demoUrl, '_blank')}
                disabled={!project.demoUrl}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                className="border-primary/30 hover:bg-primary/5"
                onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                disabled={!project.githubUrl}
              >
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative engineering solutions and technical achievements across academic and personal projects.
          </p>
        </div>

        {/* Skills Filter */}
        <div className="mb-12 animate-fade-in">
          <h3 className="text-lg font-semibold mb-4 text-center text-foreground">Filter by Technology</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {allSkills.map((skill) => (
              <Button
                key={skill}
                variant={selectedSkill === skill ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSkill(skill)}
                className={
                  selectedSkill === skill
                    ? "bg-primary text-primary-foreground"
                    : "border-primary/30 text-primary hover:bg-primary/10"
                }
              >
                {skill}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Project Categories */}
        <Tabs defaultValue="extracurricular" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="extracurricular" className="text-sm">
              Personal Projects ({getFilteredProjects(extracurricularProjects).length})
            </TabsTrigger>
            <TabsTrigger value="curricular" className="text-sm">
              Academic Projects ({getFilteredProjects(curricularProjects).length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="extracurricular" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Personal & Open Source Projects</h3>
              <p className="text-muted-foreground">
                Independent projects showcasing innovation, creativity, and self-directed learning.
              </p>
            </div>
            <ProjectGrid projects={getFilteredProjects(extracurricularProjects)} />
          </TabsContent>
          
          <TabsContent value="curricular" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Academic & Coursework Projects</h3>
              <p className="text-muted-foreground">
                University projects demonstrating mastery of engineering fundamentals and coursework applications.
              </p>
            </div>
            <ProjectGrid projects={getFilteredProjects(curricularProjects)} />
          </TabsContent>
        </Tabs>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-foreground">Project Portfolio Summary</h4>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary">{allProjects.length}</div>
                <div className="text-sm text-muted-foreground">Total Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{allSkills.length - 1}</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">
                  {allProjects.filter(p => p.status === "Completed").length}
                </div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;