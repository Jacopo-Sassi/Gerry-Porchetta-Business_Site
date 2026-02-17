import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import logo from "../assets/images/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "La Nostra Storia", href: "#storia" },
    { label: "Il Prodotto", href: "#prodotto" },
    { label: "Ricette", href: "#ricette" },
    { label: "Eventi", href: "#eventi" },
  ];

  const handleNavClick = (href: string) => {
    const sectionId = href.substring(1);

    if (location.pathname !== "/") {
      // se siamo in un'altra pagina, navighiamo alla home con stato
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      // se siamo già sulla home scrolliamo
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }
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
           {/* LOGO */}
<button
  onClick={() => handleNavClick("#home")}
  className="flex items-center gap-3 group"
>
  <img src={logo} alt="Logo" className="h-10 w-auto" />
  <div>
    <h1
      className={`text-xl font-bold tracking-tight transition-colors ${
        isScrolled ? "text-stone-800" : "text-white drop-shadow-lg"
      }`}
    >
      Porchetta Longobardi
    </h1>
    <p
      className={`text-xs transition-colors ${
        isScrolled ? "text-amber-600" : "text-amber-300"
      }`}
    >
      Maestri Dell'Arte Della Porchetta
    </p>
  </div>
</button>

            {/* NAV DESKTOP */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
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

            {/* MOBILE MENU */}
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
                onClick={() => handleNavClick(link.href)}
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
