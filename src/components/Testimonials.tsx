import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched.",
    author: "Robert Harrison",
    role: "Private Residence",
  },
  {
    quote: "The level of professionalism and quality delivered exceeded all our expectations. A truly remarkable experience from start to finish.",
    author: "Victoria Langley",
    role: "Commercial Development",
  },
  {
    quote: "Their innovative approach and meticulous execution transformed our vision into reality. Simply outstanding work.",
    author: "Alexander Chen",
    role: "Corporate Headquarters",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6 bg-primary/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          {/* Quote Mark */}
          <div className="text-[120px] font-heading leading-none opacity-20 mb-4">"</div>
          
          {/* Testimonial Content */}
          <div className="min-h-[200px] flex flex-col justify-center">
            <p className="text-[24px] md:text-[28px] font-heading italic mb-8 leading-relaxed">
              {testimonials[activeIndex].quote}
            </p>
            <div>
              <p className="text-body font-semibold mb-1">— {testimonials[activeIndex].author}</p>
              <p className="text-body-small opacity-70">{testimonials[activeIndex].role}</p>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary w-8" : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
