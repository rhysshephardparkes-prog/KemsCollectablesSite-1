import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import gramophoneImg from '@assets/generated_images/Vintage_brass_gramophone_70d3cb5d.png';
import teaSetImg from '@assets/generated_images/Victorian_porcelain_tea_set_7fe7b0ae.png';
import telephoneImg from '@assets/generated_images/Antique_rotary_telephone_304d496b.png';
import pocketWatchImg from '@assets/generated_images/Antique_brass_pocket_watch_579e82a7.png';
import booksImg from '@assets/generated_images/Vintage_leather_books_stack_802236ac.png';
import mirrorImg from '@assets/generated_images/Ornate_baroque_gilt_mirror_74d6502c.png';
import typewriterImg from '@assets/generated_images/1920s_mechanical_typewriter_4fadb290.png';
import musicBoxImg from '@assets/generated_images/Antique_wooden_music_box_dc15d046.png';

const allProducts = [
  { id: "1", name: "Vintage Brass Gramophone", price: 485, image: gramophoneImg, condition: "Excellent" as const, category: "Audio Equipment" },
  { id: "2", name: "Victorian Porcelain Tea Set", price: 320, image: teaSetImg, condition: "Excellent" as const, category: "China & Porcelain" },
  { id: "3", name: "Antique Rotary Telephone", price: 165, image: telephoneImg, condition: "Good" as const, category: "Vintage Electronics" },
  { id: "4", name: "Brass Pocket Watch", price: 425, image: pocketWatchImg, condition: "Excellent" as const, category: "Timepieces" },
  { id: "5", name: "Leather-Bound Books Collection", price: 275, image: booksImg, condition: "Good" as const, category: "Books & Manuscripts" },
  { id: "6", name: "Baroque Gilt Mirror", price: 895, image: mirrorImg, condition: "Excellent" as const, category: "Furniture & Decor" },
  { id: "7", name: "1920s Mechanical Typewriter", price: 340, image: typewriterImg, condition: "Good" as const, category: "Office Antiques" },
  { id: "8", name: "Antique Wooden Music Box", price: 235, image: musicBoxImg, condition: "Excellent" as const, category: "Musical Instruments" }
];

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen">
      <Header />
      <div className="border-b bg-card py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-center font-display text-5xl font-bold md:text-6xl">
            Shop Our Collection
          </h1>
          <p className="mx-auto max-w-2xl text-center font-body text-lg text-muted-foreground">
            Browse our carefully curated selection of antiques and collectables
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-testid="input-search-products"
            />
          </div>
          <Button variant="outline" data-testid="button-filters">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
