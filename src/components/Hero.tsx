import { ChevronDown } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            L'Arte della
            <br />
            <span className="text-amber-400">Croccantezza</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-100 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Porchetta artigianale di altissima qualità, seguendo una ricetta
            tradizionale italiana tramandata da generazioni
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" onClick={scrollToMenu}>
            Ordina la Tua Prelibatezza
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() =>
              document
                .getElementById("storia")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            La Nostra Storia
          </Button>
        </div>
      </div>

      <button
        onClick={() =>
          document
            .getElementById("storia")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white animate-bounce cursor-pointer hover:text-amber-400 transition-colors"
      >
        <ChevronDown size={48} />
      </button>
    </section>
  );
}
