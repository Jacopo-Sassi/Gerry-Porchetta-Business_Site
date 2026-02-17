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
      {/* HERO */}
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
            <p className="text-lg text-white/90 mt-2">
              Categoria: {product.category.toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      {/* CONTENUTO */}
      <div className="container mx-auto px-6 max-w-4xl py-20 space-y-16">
        {/* DESCRIZIONE */}
        <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed">
          <p>{product.description}</p>
        </div>

        {/* INGREDIENTI */}
        <div>
          <h2 className="text-3xl font-semibold text-stone-800 mb-6">
            Ingredienti
          </h2>
          <ul className="list-disc list-inside space-y-2 text-stone-700">
            {product.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* PREPARAZIONE */}
        <div>
          <h2 className="text-3xl font-semibold text-stone-800 mb-6">
            Preparazione
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-stone-700">
            {product.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>

        {/* NOTE DELLO CHEF */}
        {product.chefNotes && (
          <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-400">
            <h3 className="text-2xl font-semibold text-amber-800 mb-2">
              Note dello Chef
            </h3>
            <p className="text-stone-700">{product.chefNotes}</p>
          </div>
        )}

        {/* CALL TO ACTION */}
        <div className="text-center mt-12">
          <p className="text-stone-700 mb-4">
            Vuoi scoprire altre ricette gourmet e segreti dello chef?
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition">
            Scopri Ricette Premium
          </button>
        </div>
      </div>
    </section>
  );
}
