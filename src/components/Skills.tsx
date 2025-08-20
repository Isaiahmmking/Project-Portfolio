import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillSections = [
    {
      title: "Programming languages and Operation systems",
      categories: [
        {
          title: "Advanced",
          description: "Extended experience",
          skills: ["JavaScript", "C++"]
        },
        {
          title: "Intermediate", 
          description: "Practical experience",
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
          description: "Extended experience",
          skills: ["AutoCAD", "SolidWorks", "Revit", "Microsoft Office Tools", "Oscilloscopes", "Function generators", "Quartus", "LTSpice"]
        },
        {
          title: "Intermediate", 
          description: "Practical experience",
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
        
        {/* Soft Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Soft Skills
          </h3>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
              {/* First set of cards */}
              <div className="flex gap-6 mr-6">
                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Leadership & Team Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Gained extensive experience leading group projects through engineering coursework, coordinating collaboration between hardware and software teams while managing timelines and deliverables. Strengthened leadership and organizational skills outside the classroom as president of the jazz band, where I fostered teamwork, set performance goals, and built collaborative environments that emphasized problem-solving and accountability.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Problem Solving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Developed systematic, repeatable approaches to solve complex problems through expereince with engineering coursework and team labs—using root-cause analysis. Also have experience under pressure as a lifeguard assisting guests, creating a cordinated responses, and implementing practical fixes while maintaining safety and service. Consistently delivered results under tight timelines and documented takeaways as needed.                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Critical Thinking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Applied analytical reasoning to evaluate design trade-offs and technical specifications. Demonstrated ability to assess multiple solutions objectively and make decisions based on data in high-stakes engineering projects.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Communication & Presentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Experience communicating complex technical concepts to both technical and non-technical participents. Delivered compelling presentations for project proposals and technical reviews to diverse audiences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Project Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Experienced with managing multiple concurrent engineering projects from conception to completion. Coordinated resources, timelines, and deliverables while maintaining quality standards and meeting milestones.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Adaptability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Quickly adapted to new technologies and methodologies across different engineering disciplines. Successfully transitioned between hardware and software development environments as project requirements evolved.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Time Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Effectively prioritized tasks and managed competing deadlines across multiple academic and personal projects. Developed efficient workflows that maximized productivity while maintaining quality.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Worked effectively in diverse teams combining engineering, design, and research knowledge. Experience varsity wrestling strengthened communication, coachability.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Analytical Thinking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Applied analysis to break down complex problems into manageable components. Utilized data-driven approaches to validate hypotheses and optimize system performance across various engineering projects.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex gap-6">
                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Leadership & Team Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Gained extensive experience leading group projects through engineering coursework, coordinating collaboration between hardware and software teams while managing timelines and deliverables. Strengthened leadership and organizational skills outside the classroom as president of the jazz band, where I fostered teamwork, set performance goals, and built collaborative environments that emphasized problem-solving and accountability.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Problem Solving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Developed systematic, repeatable approaches to solve complex problems through expereince with engineering coursework and team labs—using root-cause analysis. Also have experience under pressure as a lifeguard assisting guests, creating a cordinated responses, and implementing practical fixes while maintaining safety and service. Consistently delivered results under tight timelines and documented takeaways as needed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Critical Thinking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Applied analytical reasoning to evaluate design trade-offs and technical specifications. Demonstrated ability to assess multiple solutions objectively and make decisions based on data in high-stakes engineering projects.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Communication & Presentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Experience communicating complex technical concepts to both technical and non-technical participents. Delivered compelling presentations for project proposals and technical reviews to diverse audiences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Project Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Experienced with managing multiple concurrent engineering projects from conception to completion. Coordinated resources, timelines, and deliverables while maintaining quality standards and meeting milestones.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Adaptability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Quickly adapted to new technologies and methodologies across different engineering disciplines. Successfully transitioned between hardware and software development environments as project requirements evolved.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Time Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Effectively prioritized tasks and managed competing deadlines across multiple academic and personal projects. Developed efficient workflows that maximized productivity while maintaining quality.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Worked effectively in diverse, multidisciplinary teams combining engineering, design, and research expertise. Built strong working relationships and facilitated knowledge sharing across different domains.
                    </p>
                  </CardContent>
                </Card>

                <Card className="min-w-[300px] bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Analytical Thinking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Worked effectively in diverse teams combining engineering, design, and research knowledge. Experience varsity wrestling strengthened communication, coachability.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;