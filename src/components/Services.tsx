import { Button } from "@/components/ui/button";
import designImage from "@/assets/service-design.jpg";
import consultingImage from "@/assets/service-consulting.jpg";
import developmentImage from "@/assets/service-development.jpg";
import managementImage from "@/assets/service-management.jpg";

const services = [
  {
    title: "Design Excellence",
    description: "Transforming spaces and concepts into extraordinary experiences through innovative design solutions.",
    image: designImage,
  },
  {
    title: "Strategic Consulting",
    description: "Expert guidance to navigate complex challenges and achieve sustainable growth and success.",
    image: consultingImage,
  },
  {
    title: "Premium Development",
    description: "Building exceptional quality with precision, care, and uncompromising attention to detail.",
    image: developmentImage,
  },
  {
    title: "Project Management",
    description: "Seamless coordination ensuring every project is delivered on time, on budget, and beyond expectations.",
    image: managementImage,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <p className="section-label text-center mb-4">WHAT WE OFFER</p>
        <h2 className="text-center mb-20">Our Services</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-sm border border-border bg-card animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/90 transition-all duration-500" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h4 className="text-center mb-4 text-primary-foreground">{service.title}</h4>
                  <p className="text-center text-primary-foreground/90 mb-6">{service.description}</p>
                  <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    EXPLORE
                  </Button>
                </div>
              </div>

              {/* Title (visible when not hovering) */}
              <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-center">{service.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
