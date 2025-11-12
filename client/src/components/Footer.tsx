import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">About Kem's</h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Discover timeless treasures at Kem's Antiques & Collectables. From vintage toys to rare records, we curate exceptional pieces with history and character.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link href="/shop" data-testid="link-footer-shop" className="transition-colors hover:text-primary">
                  Shop All Items
                </Link>
              </li>
              <li>
                <Link href="/about" data-testid="link-footer-about" className="transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact" className="transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Categories</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-primary">Vintage Toys</a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">Rare Records</a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">Antique Furniture</a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">Collectables</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">123 Heritage Street, Oldtown</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">hello@kemsantiques.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kem's Antiques & Collectables. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
