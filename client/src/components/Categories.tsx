import { Card } from "@/components/ui/card";
import { Music, Clock, BookOpen, Armchair } from "lucide-react";

const categories = [
  {
    id: "1",
    name: "Vintage Audio",
    icon: Music,
    count: 24,
    description: "Gramophones, radios, and rare vinyl"
  },
  {
    id: "2",
    name: "Timepieces",
    icon: Clock,
    count: 18,
    description: "Pocket watches and antique clocks"
  },
  {
    id: "3",
    name: "Books & Manuscripts",
    icon: BookOpen,
    count: 32,
    description: "Rare editions and leather-bound collections"
  },
  {
    id: "4",
    name: "Furniture",
    icon: Armchair,
    count: 15,
    description: "Victorian and Georgian period pieces"
  }
];

export default function Categories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">Shop by Category</h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Explore our carefully curated collections
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className="group cursor-pointer p-6 text-center transition-all hover-elevate active-elevate-2"
                data-testid={`card-category-${category.id}`}
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-md bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold">
                  {category.name}
                </h3>
                <p className="mb-3 font-body text-sm text-muted-foreground">
                  {category.description}
                </p>
                <p className="font-body text-sm font-medium text-primary">
                  {category.count} items
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
