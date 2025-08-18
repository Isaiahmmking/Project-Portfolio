import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ExternalLink, Github, Search } from "lucide-react";
import { 
  curricularProjects, 
  extracurricularProjects, 
  getAllTags,
  type Project 
} from "@/data/projects";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [curricularVisible, setCurricularVisible] = useState(3);
  const [extracurricularVisible, setExtracurricularVisible] = useState(3);

  // Filter projects based on search term
  const filteredCurricularProjects = useMemo(() => {
    if (!searchTerm) return curricularProjects;
    return curricularProjects.filter(project => 
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const filteredExtracurricularProjects = useMemo(() => {
    if (!searchTerm) return extracurricularProjects;
    return extracurricularProjects.filter(project => 
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <Card 
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
              className="text-xs border-primary/20 text-primary hover:bg-primary/10"
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
  );

  const ProjectColumn = ({ 
    title, 
    projects, 
    visible, 
    onLoadMore 
  }: { 
    title: string; 
    projects: Project[]; 
    visible: number;
    onLoadMore: () => void;
  }) => (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-foreground text-center">{title}</h3>
      <div className="space-y-6">
        {projects.slice(0, visible).map((project, index) => (
          <ProjectCard key={`${project.category}-${index}`} project={project} index={index} />
        ))}
      </div>
      {projects.length > visible && (
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={onLoadMore}
            className="border-primary/30 text-primary hover:bg-primary/10"
          >
            Load More
          </Button>
        </div>
      )}
      {projects.length === 0 && searchTerm && (
        <div className="text-center py-8 text-muted-foreground">
          No projects found matching "{searchTerm}"
        </div>
      )}
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

        {/* Skills Showcase */}
        <div className="mb-8 animate-fade-in">
          <h3 className="text-lg font-semibold mb-4 text-center text-foreground">Skills & Technologies</h3>
          <div className="relative overflow-hidden bg-gradient-subtle rounded-lg p-4 border border-border">
            <div className="flex animate-marquee space-x-4">
              {/* First set of skills */}
              {getAllTags().filter(tag => tag !== "All").map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="cursor-pointer border-primary/30 text-primary hover:bg-primary/10 transition-colors shrink-0 hover:scale-105"
                  onClick={() => setSearchTerm(skill)}
                >
                  {skill}
                </Badge>
              ))}
              {/* Duplicate for seamless loop */}
              {getAllTags().filter(tag => tag !== "All").map((skill) => (
                <Badge
                  key={`${skill}-duplicate`}
                  variant="outline"
                  className="cursor-pointer border-primary/30 text-primary hover:bg-primary/10 transition-colors shrink-0 hover:scale-105"
                  onClick={() => setSearchTerm(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Click any skill to search for related projects
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 animate-fade-in">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search by skills (e.g., C++, React, Python...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-primary/20 focus:border-primary"
            />
          </div>
          {searchTerm && (
            <p className="text-center mt-3 text-sm text-muted-foreground">
              Showing projects with skills matching "{searchTerm}"
            </p>
          )}
        </div>
        
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          <ProjectColumn
            title="Academic Projects"
            projects={filteredCurricularProjects}
            visible={curricularVisible}
            onLoadMore={() => setCurricularVisible(prev => prev + 3)}
          />
          <ProjectColumn
            title="Personal Projects"
            projects={filteredExtracurricularProjects}
            visible={extracurricularVisible}
            onLoadMore={() => setExtracurricularVisible(prev => prev + 3)}
          />
        </div>

      </div>
    </section>
  );
};

export default Projects;