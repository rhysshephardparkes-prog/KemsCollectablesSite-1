import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Contact form submitted:', formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="border-b bg-card py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-3 sm:mb-4 text-center font-display text-3xl font-bold sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-center font-body text-base sm:text-lg text-muted-foreground">
            Have a question or looking for something specific? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 sm:mb-6 font-display text-2xl sm:text-3xl font-bold">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-contact-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-contact-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  data-testid="input-contact-subject"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  data-testid="input-contact-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-contact-submit"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Visit Our Store</h2>

            <Card className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-display font-semibold">Address</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    123 Heritage Street<br />
                    Oldtown, OT 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-display font-semibold">Phone</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-display font-semibold">Email</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    hello@kemsantiques.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-display font-semibold">Hours</h3>
                  <div className="space-y-1 font-body text-sm text-muted-foreground">
                    <p>Monday - Friday: 10am - 6pm</p>
                    <p>Saturday: 10am - 5pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
