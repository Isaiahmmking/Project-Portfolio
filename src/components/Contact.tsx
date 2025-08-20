import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next engineering project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm always excited to discuss new opportunities, innovative projects, 
                and potential collaborations. Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gradient-card rounded-lg border border-border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">Isaiahmking04@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-card rounded-lg border border-border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">702-250-7497</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-card rounded-lg border border-border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Las Vegas, NV / Vancouver, BC</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Connect Online</h4>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 hover:bg-primary/5"
                  onClick={() => window.open('https://www.linkedin.com/in/isaiahking2004/', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 hover:bg-primary/5"
                  onClick={(e) => {
                    console.log('GitHub button clicked');
                    e.preventDefault();
                    const url = 'https://github.com/Isaiahmmking';
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 hover:bg-primary/5"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/src/assets/pdfs/Isaiah-King_Resume.pdf';
                    link.download = 'Isaiah-King_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border shadow-card animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" className="border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="border-border" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    className="border-border" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="Project Collaboration Opportunity" 
                    className="border-border" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project or how we can work together..."
                    rows={5}
                    className="border-border resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;