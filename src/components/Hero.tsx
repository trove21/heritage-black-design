import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToIntro = () => {
    const element = document.getElementById("introduction");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
        <h1 className="mb-6 text-[48px] md:text-[72px] leading-tight">
          Timeless Elegance Meets<br />Modern Excellence
        </h1>
        <p className="text-body-large mb-12 max-w-2xl mx-auto opacity-90">
          Crafting extraordinary experiences through meticulous design and unwavering dedication to quality
        </p>
        <Button
          onClick={scrollToIntro}
          size="lg"
          className="text-base font-semibold uppercase tracking-wider px-12 py-6"
        >
          BEGIN YOUR JOURNEY
        </Button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToIntro}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse-slow z-10 hover:text-primary transition-colors"
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
