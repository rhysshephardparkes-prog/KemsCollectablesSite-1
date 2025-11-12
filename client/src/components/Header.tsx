import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-primary bg-background">
              <span className="font-display text-lg font-bold text-primary">K</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold leading-tight text-foreground">
                Kem's Antiques
              </h1>
              <p className="font-body text-xs text-muted-foreground">& Collectables</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" data-testid="link-home">
              <a className="font-body text-sm font-medium transition-colors hover:text-primary">
                Home
              </a>
            </Link>
            <Link href="/shop" data-testid="link-shop">
              <a className="font-body text-sm font-medium transition-colors hover:text-primary">
                Shop
              </a>
            </Link>
            <Link href="/about" data-testid="link-about">
              <a className="font-body text-sm font-medium transition-colors hover:text-primary">
                About
              </a>
            </Link>
            <Link href="/contact" data-testid="link-contact">
              <a className="font-body text-sm font-medium transition-colors hover:text-primary">
                Contact
              </a>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search antiques..."
                  className="w-64 pl-8"
                  data-testid="input-search"
                />
              </div>
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="relative"
              data-testid="button-cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -right-1 -top-1 h-5 min-w-5 rounded-full px-1 text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              <Link href="/" data-testid="link-mobile-home">
                <a className="font-body text-sm font-medium">Home</a>
              </Link>
              <Link href="/shop" data-testid="link-mobile-shop">
                <a className="font-body text-sm font-medium">Shop</a>
              </Link>
              <Link href="/about" data-testid="link-mobile-about">
                <a className="font-body text-sm font-medium">About</a>
              </Link>
              <Link href="/contact" data-testid="link-mobile-contact">
                <a className="font-body text-sm font-medium">Contact</a>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
