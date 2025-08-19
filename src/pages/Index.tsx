import Navigation from "@/components/Navigation";
import Main from "@/components/Main";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ImageManager from "@/components/ImageManager";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <section id="image-manager" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Image Manager</h2>
          <ImageManager />
        </div>
      </section>
    </div>
  );
};

export default Index;
