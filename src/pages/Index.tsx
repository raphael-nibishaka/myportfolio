import Hero from "@/components/Hero";
import About from "@/components/About";
import Workflow from "@/components/Workflow";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import AboutMe from "@/components/AboutMe";

const Index = () => {
    return (
        <main className="min-h-screen">
            <Hero />
            <AboutMe />
            <About />
            <Workflow />
            <Skills />
            <Projects />
            <Experience />
            <CTA />
            <Footer />
        </main>
    );
};

export default Index;
