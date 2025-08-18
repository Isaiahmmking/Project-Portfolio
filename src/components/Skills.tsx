import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Advanced",
      description: "Expert-level proficiency with extensive experience",
      skills: [
        "Python", "C++", "MATLAB", "AutoCAD", "SolidWorks", 
        "Signal Processing", "Machine Learning", "Git"
      ],
      bgColor: "bg-green-500/10",
      textColor: "text-green-500",
      borderColor: "border-green-500/20"
    },
    {
      title: "Intermediate", 
      description: "Solid working knowledge and practical experience",
      skills: [
        "JavaScript", "React", "ANSYS", "Simulink", "LabVIEW",
        "IoT Systems", "Computer Vision", "Docker", "Node.js"
      ],
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500", 
      borderColor: "border-blue-500/20"
    },
    {
      title: "Proficient",
      description: "Competent with foundational understanding",
      skills: [
        "Java", "AWS", "Robotics", "Cloud Architecture"
      ],
      bgColor: "bg-orange-500/10",
      textColor: "text-orange-500",
      borderColor: "border-orange-500/20"
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
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in ${category.borderColor}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <CardTitle className={`text-2xl font-bold ${category.textColor}`}>
                  {category.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  {category.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-3 py-2 rounded-full text-sm font-medium ${category.bgColor} ${category.textColor} border ${category.borderColor}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
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