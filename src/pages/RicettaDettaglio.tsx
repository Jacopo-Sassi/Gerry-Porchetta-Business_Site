import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { PRODUCTS } from "../data/products";

export default function RicettaDettaglio() {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="py-32 text-center text-stone-600">
        Ricetta non trovata
      </div>
    );
  }

  return (
    <section className="bg-white min-h-screen">
      {/* HERO IMMAGINE */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              {product.name}
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENUTO */}
      <div className="container mx-auto px-6 max-w-4xl py-20">
        {/* Descrizione */}
        <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed">
          <p>{product.description}</p>

          <p>
            Questa ricetta nasce dalla tradizione artigianale e valorizza
            ingredienti selezionati con cura, per offrire un'esperienza
            autentica e ricca di sapore.
          </p>
        </div>
      </div>
    </section>
  );
}
