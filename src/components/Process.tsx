const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description: "We begin by understanding your vision, goals, and requirements through detailed consultations and research.",
  },
  {
    number: "02",
    title: "Strategic Planning",
    description: "Our team develops a comprehensive strategy tailored to your specific needs and objectives.",
  },
  {
    number: "03",
    title: "Design & Development",
    description: "Expert craftsmanship brings your vision to life with meticulous attention to every detail.",
  },
  {
    number: "04",
    title: "Implementation",
    description: "Seamless execution with consistent communication and quality control throughout the process.",
  },
  {
    number: "05",
    title: "Delivery & Support",
    description: "Final delivery exceeding expectations, with ongoing support to ensure lasting satisfaction.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <p className="section-label text-center mb-4">OUR APPROACH</p>
        <h2 className="text-center mb-20">A Proven Process</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 animate-slide-up">
                  <div className="bg-secondary border border-border p-10 rounded-sm max-w-md mx-auto hover:border-primary/40 transition-all duration-300">
                    <div className="relative">
                      <span className="absolute -left-4 -top-4 text-[120px] font-heading opacity-10 leading-none">
                        {step.number}
                      </span>
                      <h4 className="mb-4 relative z-10">{step.title}</h4>
                      <p className="text-body opacity-80 relative z-10">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
