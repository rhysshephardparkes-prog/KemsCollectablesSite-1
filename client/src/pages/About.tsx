import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Heart, History } from "lucide-react";
import storefrontImage from "@assets/kem_1762956401281.jpg";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="border-b bg-card py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-center font-display text-5xl font-bold md:text-6xl">
            About Kem's Antiques
          </h1>
          <p className="mx-auto max-w-2xl text-center font-body text-lg text-muted-foreground">
            A family legacy of preserving history, one treasure at a time
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="font-display text-4xl font-bold">Our Story</h2>
            <div className="space-y-4 font-body leading-relaxed text-muted-foreground">
              <p>
                Established in 1985, Kem's Antiques & Collectables has been a cornerstone of the antiques community for nearly four decades. What began as a small shop has grown into a beloved destination for collectors, historians, and anyone who appreciates the beauty of bygone eras.
              </p>
              <p>
                Our founder, Kenneth "Kem" Morrison, started collecting antiques as a young boy, fascinated by the stories each piece could tell. That passion evolved into a lifelong commitment to preserving history and sharing it with others.
              </p>
              <p>
                Today, we continue that tradition, carefully curating each item in our collection. From Victorian-era porcelain to mid-century modern treasures, every piece is authenticated, restored when necessary, and priced fairly.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border">
            <img
              src={storefrontImage}
              alt="Kem's Antiques storefront"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <Card className="p-6 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-md bg-primary/10">
              <History className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold">40 Years Experience</h3>
            <p className="font-body text-sm text-muted-foreground">
              Four decades of expertise in antiques and collectables
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-md bg-primary/10">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold">Authenticated Items</h3>
            <p className="font-body text-sm text-muted-foreground">
              Every piece is verified and authenticated by experts
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-md bg-primary/10">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold">Passion Driven</h3>
            <p className="font-body text-sm text-muted-foreground">
              We love what we do and it shows in our collection
            </p>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
