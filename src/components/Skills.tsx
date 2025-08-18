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
          skills: ["AutoCAD", "SolidWorks", "Revit", "Microsoft Office Tools", "Oscilloscopes", "Function generators", "Quartus", "LTSpice"]
        },
        {
          title: "Intermediate", 
          description: "Solid working knowledge and practical experience",
          skills: ["Altium", "Signal Processing", "Eagle"]
        },
        {
          title: "Proficient",
          description: "Competent with foundational understanding",
          skills: ["LabVIEW", "Simulink", "ANSYS"]
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
      </div>
    </section>
  );
};

export default Skills;