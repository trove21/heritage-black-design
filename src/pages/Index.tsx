import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <Process />
        <Team />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
