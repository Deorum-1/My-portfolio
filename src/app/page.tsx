import About from "@/components/About";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="bg-accent text-accent-foreground sr-only fixed top-3 left-3 z-[60] rounded-full px-4 py-3 font-semibold focus:not-sr-only"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <Services />
        <Process />
        <About />
        <BlogPreview />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
