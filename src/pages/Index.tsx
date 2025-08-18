import Navigation from "@/components/Navigation";
import Main from "@/components/Main";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
    </div>
  );
};

export default Index;
