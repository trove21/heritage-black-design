import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Hammer, Ruler, HardHat } from "lucide-react";
import heroImage from "@/assets/concept2-hero.jpg";
import detailImage from "@/assets/detail-1.jpg";

const Concept2 = () => {
  const projects = [
    { year: "1924", type: "Victorian Restoration", sqft: "3,200", location: "Pacific Heights" },
    { year: "1928", type: "Craftsman Revival", sqft: "2,800", location: "Noe Valley" },
    { year: "1922", type: "Colonial Renovation", sqft: "4,100", location: "Marina District" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Blueprint Grid */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-foreground" />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 h-20 flex items-center justify-between relative z-10">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm uppercase tracking-wider font-mono">← BACK</span>
          </Link>
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.2em] opacity-60 mb-1 font-mono">[ CONCEPT 02 ]</div>
            <div className="font-heading text-xl">INDUSTRIAL HERITAGE</div>
          </div>
          <Button variant="outline" size="sm">SCHEDULE</Button>
        </div>
      </header>

      {/* Hero Section with Blueprint Sketch */}
      <section className="relative min-h-screen flex items-center justify-center mt-20 overflow-hidden">
        {/* Background with texture overlay */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="Craftsman Heritage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
          
          {/* Blueprint line sketch overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <line x1="200" y1="300" x2="800" y2="300" stroke="currentColor" strokeWidth="2" />
              <line x1="200" y1="300" x2="200" y2="700" stroke="currentColor" strokeWidth="2" />
              <line x1="800" y1="300" x2="800" y2="700" stroke="currentColor" strokeWidth="2" />
              <line x1="200" y1="700" x2="800" y2="700" stroke="currentColor" strokeWidth="2" />
              <line x1="200" y1="450" x2="800" y2="450" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="500" y1="300" x2="500" y2="700" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
              <rect x="350" y="550" width="100" height="150" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="550" y="550" width="100" height="150" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-left px-6 max-w-4xl"
        >
          <div className="border-l-4 border-[#6B8E7F] pl-8">
            <p className="text-[#6B8E7F] text-sm uppercase tracking-[0.2em] font-mono mb-4">
              [ EST. 2024 ]
            </p>
            <h1 className="font-heading text-[70px] md:text-[90px] leading-none mb-6">
              DOUBLE R<br />RENOVATIONS
            </h1>
            <div className="h-[2px] w-[400px] bg-gradient-to-r from-[#6B8E7F] to-transparent mb-6" />
            <p className="text-[18px] font-body opacity-80 max-w-xl mb-8">
              Craftsmen of Historic Homes
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                SCHEDULE CONSULTATION
              </Button>
              <Button size="lg" variant="outline">
                VIEW PORTFOLIO
              </Button>
            </div>
          </div>

          {/* Technical specs */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl">
            {[
              { icon: Hammer, label: "20+ Years", detail: "Experience" },
              { icon: Ruler, label: "150+", detail: "Restorations" },
              { icon: HardHat, label: "100%", detail: "Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-secondary/50 border border-border p-6"
              >
                <stat.icon className="text-[#6B8E7F] mb-3" size={28} strokeWidth={1.5} />
                <div className="font-mono text-2xl mb-1">{stat.label}</div>
                <div className="text-sm opacity-70 uppercase tracking-wide">{stat.detail}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects - Masonry Grid with Technical Specs */}
      <section className="py-32 px-6 relative">
        {/* Visible grid system */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="grid grid-cols-12 h-full container mx-auto">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-foreground" />
            ))}
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="section-label mb-4 text-[#6B8E7F] font-mono">[ RECENT WORK ]</p>
            <h2 className="text-[56px] font-heading">Our Restorations</h2>
          </motion.div>

          {/* Asymmetrical masonry grid */}
          <div className="grid grid-cols-12 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`
                  group relative overflow-hidden bg-secondary border border-border hover:border-[#6B8E7F] transition-all duration-300
                  ${i === 0 ? 'col-span-7 row-span-2' : i === 1 ? 'col-span-5' : 'col-span-12'}
                `}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={detailImage} 
                    alt={project.type}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Technical overlay on hover */}
                  <div className="absolute inset-0 bg-background/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-center">
                    <div className="font-mono text-sm text-[#6B8E7F] mb-4">
                      [ PROJECT SPECS ]
                    </div>
                    <h4 className="mb-6">{project.type}</h4>
                    <div className="space-y-3 font-mono text-sm">
                      <div className="flex justify-between border-b border-border/50 pb-2">
                        <span className="opacity-70">YEAR BUILT:</span>
                        <span className="text-[#6B8E7F]">{project.year}</span>
                      </div>
                      <div className="flex justify-between border-b border-border/50 pb-2">
                        <span className="opacity-70">SQUARE FEET:</span>
                        <span className="text-[#6B8E7F]">{project.sqft}</span>
                      </div>
                      <div className="flex justify-between border-b border-border/50 pb-2">
                        <span className="opacity-70">LOCATION:</span>
                        <span className="text-[#6B8E7F]">{project.location}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-6 w-fit">
                      VIEW DETAILS →
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="font-mono text-sm opacity-60">
              © 2024 DOUBLE R RENOVATIONS
            </div>
            <div className="font-mono text-sm text-[#6B8E7F]">
              [ INDUSTRIAL HERITAGE CONCEPT ]
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Concept2;
