import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const newsItems = [
  {
    id: "1",
    title: "Rare Beatles Memorabilia Arrives",
    date: "November 10, 2025",
    excerpt: "We're thrilled to announce the arrival of authentic Beatles memorabilia, including rare vinyl records and concert posters from the 1960s.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Victorian Era Collection Expanded",
    date: "November 5, 2025",
    excerpt: "Our Victorian collection now features exquisite porcelain pieces, ornate mirrors, and authentic period furniture.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&auto=format&fit=crop"
  }
];

export default function LatestNews() {
  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">Latest News</h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Stay updated with our newest arrivals and announcements
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover-elevate" data-testid={`card-news-${item.id}`}>
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-3 p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="font-body">{item.date}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="font-body leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
