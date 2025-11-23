import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll be in touch shortly.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <p className="section-label text-center mb-4">GET IN TOUCH</p>
        <h2 className="text-center mb-8">Contact Us</h2>
        <p className="text-body-large text-center mb-12 opacity-90">
          We'd love to hear about your project. Reach out to begin the conversation.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50"
              />
            </div>
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-background/50"
            />
          </div>
          <div>
            <Textarea
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-[150px] bg-background/50"
            />
          </div>
          <div className="text-center">
            <Button type="submit" size="lg" className="uppercase tracking-wider px-12">
              SEND MESSAGE
            </Button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">
          <div>
            <h6 className="mb-2 uppercase tracking-wider">Address</h6>
            <p className="text-body-small opacity-70">123 Elegance Avenue<br />Suite 500<br />New York, NY 10001</p>
          </div>
          <div>
            <h6 className="mb-2 uppercase tracking-wider">Phone</h6>
            <p className="text-body-small opacity-70">+1 (555) 123-4567</p>
          </div>
          <div>
            <h6 className="mb-2 uppercase tracking-wider">Email</h6>
            <p className="text-body-small opacity-70">contact@elegance.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
