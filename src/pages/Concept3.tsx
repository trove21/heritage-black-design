import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowDown } from "lucide-react";
import heroImage from "@/assets/concept3-hero.jpg";
import afterImage from "@/assets/after-restoration.jpg";
import detailImage from "@/assets/detail-1.jpg";

const Concept3 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
            <ArrowLeft size={16} />
            Back
          </Link>
          <div className="font-heading text-lg tracking-wider">DOUBLE R</div>
          <Button variant="ghost" size="sm" className="text-sm">Menu</Button>
        </div>
      </header>

      {/* Magazine Cover Hero */}
      <section className="relative h-screen min-h-[800px] mt-16">
        {/* Full-bleed image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Victorian Reimagined" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/90" />
        </div>

        {/* Magazine-style content overlay */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-full flex flex-col justify-end pb-32 px-6"
        >
          <div className="container mx-auto max-w-5xl">
            {/* Issue details */}
            <div className="flex items-center gap-4 mb-8 text-sm uppercase tracking-[0.25em] opacity-70">
              <span>1924</span>
              <span>◆</span>
              <span>Pacific Heights</span>
              <span>◆</span>
              <span>4,200 SQ FT</span>
            </div>

            {/* Dramatic headline */}
            <h1 className="text-[100px] md:text-[140px] leading-[0.9] font-heading mb-8 max-w-4xl">
              A Victorian<br />
              <span className="italic">Reimagined</span>
            </h1>

            {/* Scroll prompt */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <ArrowDown size={24} className="animate-pulse-slow" />
              <span className="text-sm uppercase tracking-wider group-hover:text-primary transition-colors">
                Read the Story
              </span>
            </div>
          </div>
        </motion.div>

        {/* Large background year */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-heading opacity-[0.03] pointer-events-none leading-none">
          1924
        </div>
      </section>

      {/* Editorial Story Layout */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Chapter number */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-sm uppercase tracking-[0.3em] opacity-60 mb-2">Chapter 01</div>
            <h2 className="text-[64px] font-heading leading-tight max-w-3xl">
              Where History Meets Tomorrow
            </h2>
          </motion.div>

          {/* Editorial grid layout */}
          <div className="grid grid-cols-12 gap-8">
            {/* Large feature image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-7"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={afterImage} 
                  alt="Restored Interior" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-sm mt-4 opacity-60 italic">
                The restored living room showcases original 1920s molding alongside contemporary furnishings
              </p>
            </motion.div>

            {/* Text content wrapping */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-5 flex flex-col justify-center"
            >
              <div className="space-y-6 text-body-large leading-relaxed">
                <p className="opacity-90">
                  <span className="text-[72px] float-left font-heading leading-none mr-4 mt-2">W</span>
                  hen Sarah and Michael first walked through the doors of their 1924 Victorian, 
                  they knew they had found something special. Beneath layers of time and neglect 
                  lay the bones of a truly magnificent home.
                </p>
                <p className="opacity-80">
                  Our team spent eighteen months carefully peeling back the decades, revealing 
                  original hardwood floors, hand-carved moldings, and Art Deco fixtures that had 
                  been hidden for generations.
                </p>
                <p className="opacity-80">
                  The result is a home that honors its heritage while embracing modern living—a 
                  perfect blend of past and present.
                </p>
              </div>

              {/* Pull quote */}
              <div className="mt-12 pl-8 border-l-2 border-primary">
                <p className="text-2xl font-heading italic leading-relaxed mb-4">
                  "This project exceeded our expectations in every way."
                </p>
                <p className="text-sm uppercase tracking-wider opacity-70">
                  — Sarah & Michael, Homeowners
                </p>
              </div>
            </motion.div>
          </div>

          {/* Horizontal scrolling gallery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="mb-8">
              <div className="text-sm uppercase tracking-[0.3em] opacity-60 mb-2">Photo Essay</div>
              <h3 className="text-[40px] font-heading">Architectural Details</h3>
            </div>
            
            <div className="flex gap-8 overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide">
              {[detailImage, afterImage, detailImage].map((img, i) => (
                <div key={i} className="flex-shrink-0 w-[600px]">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={img} 
                      alt={`Detail ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="text-sm mt-4 opacity-60">
                    Detail {i + 1}: {["Original brass hardware", "Restored ceiling medallion", "Art Deco fixtures"][i]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Editorial Style */}
      <section className="py-32 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm uppercase tracking-[0.3em] opacity-60 mb-6">Begin Your Story</div>
            <h2 className="text-[56px] font-heading leading-tight mb-8">
              Ready to Restore<br />Your Heritage Home?
            </h2>
            <p className="text-body-large opacity-80 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can bring your historic home back to life while creating 
              a space perfectly suited for modern living.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-hover px-12 py-7 text-base">
              SCHEDULE A CONSULTATION
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between border-t border-border pt-8">
            <div className="text-sm opacity-60">
              © 2024 Double R Renovations
            </div>
            <div className="text-sm italic opacity-60">
              Timeless Editorial Concept
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Concept3;
