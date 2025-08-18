const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a Systems Engineering student with a strong foundation in engineering project development, and I pride myself on being coachable, adaptable, and eager to learn new skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              My Background
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I was born and raised in Las Vegas, Nevada, where I attended West Career and Technical Academy with a concentration in engineering. After graduation, I attended Simon Fraser University pursuing a degree in Systems Engineering with a minor in Business. Now a rising junior, I aim to learn more about automation, embedded systems, and large-scale system design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in engineering principles and technology, I strive to deliver meaningful and impactful results in every project I take on.
            </p>
          </div>
          
          <div className="animate-scale-in">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border">
              <h4 className="text-xl font-semibold mb-6 text-foreground">Hobbies & Passions</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Music</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I have been a lifelong musician, from classical piano to thrash drumming, and music has deeply shaped my creativity, discipline, and ability to collaborate in group settings.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Sports</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Competing at a high level in multiple sports, including varsity wrestling at Simon Fraser University and national baseball tournaments, has instilled in me a strong work ethic, resilience, and the ability to adapt and thrive within a team environment.
                  </p>
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