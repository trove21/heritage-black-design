import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="mb-6">Ready to Begin Your Project?</h2>
        <p className="text-body-large mb-12 max-w-2xl mx-auto opacity-80">
          Let's discuss how we can bring your vision to life with our expertise and dedication to excellence.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="text-base font-semibold uppercase tracking-wider px-16 py-6"
        >
          SCHEDULE CONSULTATION
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
