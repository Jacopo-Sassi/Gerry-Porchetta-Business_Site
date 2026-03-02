import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { PRODUCTS, Product } from "../data/products";

export default function Ricette({ id }: { id?: string }) {
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "Tutti", emoji: "🍽️" },
    { id: "Antipasti", name: "Antipasti", emoji: "🥗" },
    { id: "Panini Gourmet", name: "Panini Gourmet", emoji: "🥪" },
    { id: "Primi Piatti", name: "Primi Piatti", emoji: "🍲" },
    { id: "Secondi Piatti", name: "Secondi Piatti", emoji: "🍖" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setProducts(PRODUCTS.filter((p) => p.available));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  if (loading) {
    return (
      <section id={id || "ricette"} className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-2xl text-stone-600">Caricamento menu...</p>
        </div>
      </section>
    );
  }

  return (
    <section id={id || "ricette"} className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle
          title="Le Nostre Ricette"
          subtitle="Dalla tradizione alla tua tavola: scegli tra panini artigianali, porchetta al taglio e piatti pronti"
        />

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-amber-600 text-white shadow-lg scale-105"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-stone-100 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-3">
                  {product.name}
                </h3>

                <p className="text-stone-600 mb-6 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => navigate(`/ricette/${product.id}`)}
                >
                  Scopri di più
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-stone-600">
              Nessuna ricetta disponibile in questa categoria
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
