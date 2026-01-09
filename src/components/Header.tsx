import { useState, useEffect } from "react";
import { ShoppingCart, Menu as MenuIcon, X } from "lucide-react";

interface HeaderProps {
  onCartOpen: () => void;
  cartItemCount: number;
}

export default function Header({ onCartOpen, cartItemCount }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      label: "Home",
      href: "#home",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    { label: "La Nostra Storia", href: "#storia" },
    { label: "Il Prodotto", href: "#prodotto" },
    { label: "Menu", href: "#menu" },
    { label: "Eventi", href: "#eventi" },
  ];

  const handleNavClick = (href: string, action?: () => void) => {
    if (action) {
      action();
    } else {
      document
        .getElementById(href.substring(1))
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 group"
            >
              <span className="text-3xl transform group-hover:scale-110 transition-transform">
                
              </span>
              <div>
                <h1
                  className={`text-xl font-bold tracking-tight transition-colors ${
                    isScrolled ? "text-stone-800" : "text-white drop-shadow-lg"
                  }`}
                >
                  Maestri Dell'Arte Della Porchetta
                </h1>
                <p
                  className={`text-xs transition-colors ${
                    isScrolled ? "text-amber-600" : "text-amber-300"
                  }`}
                >
                  Dal Busto alla braciola, Fino Al Prosciutto
                </p>
              </div>
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.action)}
                  className={`font-semibold transition-all hover:scale-105 ${
                    isScrolled
                      ? "text-stone-700 hover:text-amber-600"
                      : "text-white hover:text-amber-300 drop-shadow-lg"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={onCartOpen}
                className={`relative p-3 rounded-full transition-all hover:scale-110 ${
                  isScrolled
                    ? "bg-amber-600 text-white hover:bg-amber-700"
                    : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                }`}
              >
                <ShoppingCart size={24} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-3 rounded-full transition-all ${
                  isScrolled
                    ? "bg-stone-100 text-stone-800"
                    : "bg-white/20 backdrop-blur-sm text-white"
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.action)}
                className="block w-full text-left py-3 px-4 text-stone-800 font-semibold hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
