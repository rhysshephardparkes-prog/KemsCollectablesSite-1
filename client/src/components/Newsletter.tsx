import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Newsletter signup:', email);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
    }, 1500);
  };

  return (
    <section className="border-y bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-md bg-primary/10">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Stay Informed
          </h2>
          <p className="mb-8 font-body text-lg leading-relaxed text-muted-foreground">
            Subscribe to our newsletter for updates on new arrivals, exclusive offers, and antique collecting tips.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              data-testid="input-newsletter-email"
            />
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              data-testid="button-newsletter-submit"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
