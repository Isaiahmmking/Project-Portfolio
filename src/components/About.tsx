const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate engineer with expertise in innovative problem-solving and cutting-edge technology implementation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Engineering Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in creating solutions that not only solve complex problems but also enhance 
              user experiences and drive technological advancement. My approach combines analytical 
              thinking with creative innovation to deliver impactful results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in engineering principles and a passion for emerging 
              technologies, I strive to bridge the gap between theoretical knowledge and 
              practical application in every project I undertake.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Problem-solving mindset</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Continuous learning approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Collaborative team player</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Innovation-driven results</span>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border">
              <h4 className="text-xl font-semibold mb-6 text-foreground">Quick Facts</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-semibold text-foreground">5+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-semibold text-foreground">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Technologies</span>
                  <span className="font-semibold text-foreground">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Certifications</span>
                  <span className="font-semibold text-foreground">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;