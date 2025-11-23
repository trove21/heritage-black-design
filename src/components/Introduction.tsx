import { Award, Shield, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Excellence",
    description: "Unwavering commitment to superior quality in every project we undertake",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Built on transparency, integrity, and decades of proven reliability",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Pioneering solutions that blend timeless elegance with modern advancement",
  },
];

const Introduction = () => {
  return (
    <section id="introduction" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Label */}
        <p className="section-label text-center mb-4 animate-fade-in">WHO WE ARE</p>
        
        {/* Main Heading */}
        <h2 className="text-center mb-8 animate-slide-up">Excellence in Every Detail</h2>
        
        {/* Introduction Text */}
        <p className="text-body-large text-center max-w-3xl mx-auto mb-20 opacity-90 animate-slide-up">
          For over two decades, we have been dedicated to delivering unparalleled quality and service. 
          Our approach combines traditional craftsmanship with contemporary innovation, ensuring every 
          project exceeds expectations.
        </p>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group p-12 bg-secondary border border-border rounded-sm transition-all duration-300 hover:scale-105 hover:border-primary/40 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <pillar.icon className="w-12 h-12 mb-6 mx-auto text-foreground" strokeWidth={1.5} />
              <h4 className="text-center mb-4">{pillar.title}</h4>
              <p className="text-body text-center opacity-80">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
