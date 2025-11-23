import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/concept1-hero.jpg";
import beforeImage from "@/assets/before-restoration.jpg";
import afterImage from "@/assets/after-restoration.jpg";
import { useState } from "react";

const Concept1 = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm uppercase tracking-wider">Back to Concepts</span>
          </Link>
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.3em] opacity-60 mb-1">◆ Concept 01 ◆</div>
            <div className="font-heading text-xl tracking-wide">HERITAGE REFINED</div>
          </div>
          <Button variant="outline" size="sm">CONTACT</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center mt-20">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Restored Heritage Home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        {/* Art Deco Ornamental Borders */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-[#B8936E] to-transparent opacity-50" />
        <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-[#B8936E] to-transparent opacity-50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-6"
        >
          <div className="mb-8">
            <div className="text-[#B8936E] text-sm uppercase tracking-[0.3em] mb-6">◆ ▪ ◆</div>
            <h1 className="font-heading text-[80px] md:text-[100px] leading-none tracking-wider mb-6">
              DOUBLE R<br />RENOVATIONS
            </h1>
            <p className="text-[22px] font-body tracking-[0.2em] uppercase opacity-80 mb-8">
              Restoring Heritage, Embracing Tomorrow
            </p>
            <div className="text-[#B8936E] text-sm uppercase tracking-[0.3em]">◆ ▪ ◆</div>
          </div>
          <Button size="lg" className="mt-12 bg-primary hover:bg-primary-hover shadow-lg">
            EXPLORE PROJECTS
          </Button>
        </motion.div>
      </section>

      {/* Introduction with Art Deco Pattern */}
      <section className="py-32 px-6 relative">
        {/* Subtle Art Deco Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="artdeco" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50 0 L60 20 L50 40 L40 20 Z" fill="currentColor" />
                <path d="M0 50 L20 60 L40 50 L20 40 Z" fill="currentColor" />
                <path d="M60 50 L80 60 L100 50 L80 40 Z" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#artdeco)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center border border-[#B8936E]/30 p-16 bg-secondary/50"
          >
            <div className="text-[150px] leading-none font-heading opacity-10 absolute top-0 left-8">R</div>
            <p className="section-label mb-6 text-[#B8936E]">◆ OUR PHILOSOPHY ◆</p>
            <h2 className="mb-8 tracking-wide">Craftsmanship Meets Elegance</h2>
            <p className="text-body-large leading-relaxed opacity-90 relative z-10">
              <span className="text-[64px] float-left font-heading text-primary leading-none mr-4 mt-2">W</span>
              e specialize in breathing new life into historic homes from the 1920s era, 
              carefully preserving their original character while seamlessly integrating 
              modern amenities. Each restoration is a testament to timeless design and 
              contemporary functionality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before/After Split Screen */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="section-label mb-4 text-[#B8936E]">◆ TRANSFORMATION ◆</p>
            <h2 className="tracking-wide">The Art of Restoration</h2>
          </motion.div>

          <div className="relative h-[600px] overflow-hidden border-2 border-[#B8936E]/40 shadow-2xl">
            {/* Before Image (Sepia) */}
            <div className="absolute inset-0">
              <img 
                src={beforeImage} 
                alt="Before Restoration" 
                className="w-full h-full object-cover sepia"
              />
              <div className="absolute top-8 left-8 bg-background/90 px-6 py-3 border border-[#B8936E]/50">
                <span className="text-sm uppercase tracking-wider text-[#B8936E]">Before</span>
              </div>
            </div>

            {/* After Image (Full Color) */}
            <div 
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={afterImage} 
                alt="After Restoration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-8 right-8 bg-primary/90 px-6 py-3 border border-primary">
                <span className="text-sm uppercase tracking-wider text-primary-foreground">After</span>
              </div>
            </div>

            {/* Slider */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-[#B8936E] cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={(e) => {
                const handleMouseMove = (moveEvent: MouseEvent) => {
                  const rect = e.currentTarget.parentElement!.getBoundingClientRect();
                  const x = moveEvent.clientX - rect.left;
                  const percentage = (x / rect.width) * 100;
                  setSliderPosition(Math.max(0, Math.min(100, percentage)));
                };
                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#B8936E] rounded-full p-3 shadow-lg">
                <div className="flex gap-1">
                  <ChevronLeft size={20} />
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-body-small opacity-70 mt-8 uppercase tracking-wider">
            Drag to reveal transformation
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-body-small opacity-60">
            © 2024 Double R Renovations. Heritage Refined Concept.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Concept1;
