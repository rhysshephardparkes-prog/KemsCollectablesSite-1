import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import storefrontImage from "@assets/kem_1762956401281.jpg";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${storefrontImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl space-y-6">
            <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Welcome to Kem's
              <br />
              Antiques & Collectables
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-white/90 md:text-xl">
              Discover a treasure trove of antiques and collectables at Kem's. From vintage toys to rare records, explore our curated selection and find timeless pieces to cherish.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground"
                data-testid="button-explore"
              >
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
