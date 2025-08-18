import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillSections = [
    {
      title: "Programming languages and Operation systems",
      categories: [
        {
          title: "Advanced",
          description: "Expert-level proficiency with extensive experience",
          skills: ["JavaScript", "C++"]
        },
        {
          title: "Intermediate", 
          description: "Solid working knowledge and practical experience",
          skills: ["MATLAB", "Python"]
        },
        {
          title: "Proficient",
          description: "Competent with foundational understanding",
          skills: ["React", "Linux", "SQL", "MacOS"]
        }
      ]
    },
    {
      title: "Hardware/Tools",
      categories: [
        {
          title: "Advanced",
          description: "Expert-level proficiency with extensive experience",
          skills: ["AutoCAD", "SolidWorks", "Signal Processing", "Machine Learning", "Git"]
        },
        {
          title: "Intermediate", 
          description: "Solid working knowledge and practical experience",
          skills: ["ANSYS", "Simulink", "LabVIEW", "IoT Systems", "Computer Vision", "Docker"]
        },
        {
          title: "Proficient",
          description: "Competent with foundational understanding",
          skills: ["Linux", "AWS", "Robotics", "Cloud Architecture"]
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across engineering disciplines, programming languages, and cutting-edge technologies.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {skillSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              <h3 className="text-3xl font-bold text-center text-foreground mb-8">
                {section.title}
              </h3>
              
              <div className="space-y-6">
                {section.categories.map((category, categoryIndex) => (
                  <Card 
                    key={categoryIndex} 
                    className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {category.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground border border-border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Professional Engineer (PE) License</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">AWS Certified Solutions Architect</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Certified SolidWorks Professional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Six Sigma Green Belt</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Project Management Professional (PMP)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Certified Robotics Engineer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Machine Learning Specialization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">IEEE Member & Published Researcher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;