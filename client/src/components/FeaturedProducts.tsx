import ProductCard from "./ProductCard";
import gramophoneImg from '@assets/generated_images/Vintage_brass_gramophone_70d3cb5d.png';
import teaSetImg from '@assets/generated_images/Victorian_porcelain_tea_set_7fe7b0ae.png';
import telephoneImg from '@assets/generated_images/Antique_rotary_telephone_304d496b.png';
import pocketWatchImg from '@assets/generated_images/Antique_brass_pocket_watch_579e82a7.png';
import booksImg from '@assets/generated_images/Vintage_leather_books_stack_802236ac.png';
import mirrorImg from '@assets/generated_images/Ornate_baroque_gilt_mirror_74d6502c.png';
import typewriterImg from '@assets/generated_images/1920s_mechanical_typewriter_4fadb290.png';
import musicBoxImg from '@assets/generated_images/Antique_wooden_music_box_dc15d046.png';

const featuredProducts = [
  {
    id: "1",
    name: "Vintage Brass Gramophone",
    price: 485,
    image: gramophoneImg,
    condition: "Excellent" as const,
    category: "Audio Equipment"
  },
  {
    id: "2",
    name: "Victorian Porcelain Tea Set",
    price: 320,
    image: teaSetImg,
    condition: "Excellent" as const,
    category: "China & Porcelain"
  },
  {
    id: "3",
    name: "Antique Rotary Telephone",
    price: 165,
    image: telephoneImg,
    condition: "Good" as const,
    category: "Vintage Electronics"
  },
  {
    id: "4",
    name: "Brass Pocket Watch",
    price: 425,
    image: pocketWatchImg,
    condition: "Excellent" as const,
    category: "Timepieces"
  },
  {
    id: "5",
    name: "Leather-Bound Books Collection",
    price: 275,
    image: booksImg,
    condition: "Good" as const,
    category: "Books & Manuscripts"
  },
  {
    id: "6",
    name: "Baroque Gilt Mirror",
    price: 895,
    image: mirrorImg,
    condition: "Excellent" as const,
    category: "Furniture & Decor"
  },
  {
    id: "7",
    name: "1920s Mechanical Typewriter",
    price: 340,
    image: typewriterImg,
    condition: "Good" as const,
    category: "Office Antiques"
  },
  {
    id: "8",
    name: "Antique Wooden Music Box",
    price: 235,
    image: musicBoxImg,
    condition: "Excellent" as const,
    category: "Musical Instruments"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">Featured Items</h2>
          <p className="mt-3 sm:mt-4 font-body text-base sm:text-lg text-muted-foreground">
            Handpicked treasures from our curated collection
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
