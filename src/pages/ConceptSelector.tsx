import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ConceptSelector = () => {
  const concepts = [
    {
      id: 1,
      title: "Heritage Refined",
      subtitle: "Art Deco Meets Minimalism",
      description: "Geometric elegance with symmetrical layouts and golden accents",
      path: "/concept-1",
    },
    {
      id: 2,
      title: "Industrial Heritage",
      subtitle: "Raw Meets Refined",
      description: "Authentic craftsmanship with blueprint aesthetics and material focus",
      path: "/concept-2",
    },
    {
      id: 3,
      title: "Timeless Editorial",
      subtitle: "Magazine Luxury Meets Digital",
      description: "Story-driven layouts with dramatic typography and full-bleed imagery",
      path: "/concept-3",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4">Double R Renovations</h1>
          <p className="text-body-large opacity-80">Choose a Design Concept</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link
                to={concept.path}
                className="block group bg-secondary border border-border rounded-sm p-8 hover:border-primary/60 transition-all duration-300 hover:scale-105"
              >
                <div className="text-[80px] font-heading opacity-10 leading-none mb-4">
                  {String(concept.id).padStart(2, "0")}
                </div>
                <h3 className="mb-2 group-hover:text-primary transition-colors">
                  {concept.title}
                </h3>
                <p className="text-body-small text-primary mb-4 uppercase tracking-wider">
                  {concept.subtitle}
                </p>
                <p className="text-body opacity-70">{concept.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConceptSelector;
