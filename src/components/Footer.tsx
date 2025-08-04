const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-foreground/5 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Portfolio
            </h3>
            <p className="text-muted-foreground">
              Engineering Excellence Through Innovation
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Engineering Portfolio. Crafted with precision and passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;