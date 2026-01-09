import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Button from './Button';

// Definiamo i tipi
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  available: boolean;
  weight_based: boolean;
  created_at: string;
}

interface CartItem extends Product {
  cartQuantity: number;
  cartWeight?: number;
}

interface MenuProps {
  onCartUpdate: (items: CartItem[]) => void;
  cartItems: CartItem[];
}

// Array mock di prodotti
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Panino Prosciutto',
    description: 'Panino artigianale con prosciutto e formaggio.',
    price: 5.5,
    category: 'panini',
    image_url: '/images/panino.jpg',
    available: true,
    weight_based: false,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Porchetta al Taglio',
    description: 'Porchetta succulenta a fette, pronta da gustare.',
    price: 8.0,
    category: 'al_taglio',
    image_url: '/images/porchetta.jpg',
    available: true,
    weight_based: true,
    created_at: new Date().toISOString(),
  },
  // Aggiungi altri prodotti mock se vuoi
];

export default function Menu({ onCartUpdate, cartItems }: MenuProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Tutti', emoji: '🍽️' },
    { id: 'panini', name: 'Panini', emoji: '🥖' },
    { id: 'al_taglio', name: 'Al Taglio', emoji: '🔪' },
    { id: 'piatti', name: 'Piatti', emoji: '🍴' },
    { id: 'eventi', name: 'Eventi & Catering', emoji: '🎉' }
  ];

  useEffect(() => {
    // Simuliamo fetch dal server
    const fetchProducts = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500)); // simulazione delay
        setProducts(MOCK_PRODUCTS.filter(p => p.available));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item.id === product.id
          ? { ...item, cartQuantity: item.cartQuantity + 1 }
          : item
      );
      onCartUpdate(updatedCart);
    } else {
      onCartUpdate([...cartItems, { ...product, cartQuantity: 1 }]);
    }
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const getCartQuantity = (productId: string) => {
    const item = cartItems.find(i => i.id === productId);
    return item ? item.cartQuantity : 0;
  };

  if (loading) {
    return (
      <section id="menu" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-2xl text-stone-600">Caricamento menu...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle
          title="Il Nostro Menu"
          subtitle="Dalla tradizione alla tua tavola: scegli tra panini artigianali, porchetta al taglio e piatti pronti"
        />

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
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
                {getCartQuantity(product.id) > 0 && (
                  <div className="absolute top-4 right-4 bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg">
                    {getCartQuantity(product.id)}
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-stone-800">{product.name}</h3>
                  <span className="text-2xl font-bold text-amber-600">
                    €{product.price.toFixed(2)}
                    {product.weight_based && <span className="text-sm">/kg</span>}
                  </span>
                </div>

                <p className="text-stone-600 mb-6 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                <Button
                  onClick={() => addToCart(product)}
                  variant="primary"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Plus size={20} />
                  Aggiungi al Carrello
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-stone-600">
              Nessun prodotto disponibile in questa categoria
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
