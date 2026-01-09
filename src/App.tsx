import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Storia from './components/Storia';
import Prodotto from './components/Prodotto';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Cart from './components/Cart';

// Definiamo i tipi per il carrello (stesso usato in Menu e Cart)
export interface Product {
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

export interface CartItem extends Product {
  cartQuantity: number;
  cartWeight?: number;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.cartQuantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header onCartOpen={() => setIsCartOpen(true)} cartItemCount={cartItemCount} />
      <Hero />
      <Storia />
      <Prodotto />
      <Menu onCartUpdate={setCartItems} cartItems={cartItems} />
      <Gallery />
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateCart={setCartItems}
      />
    </div>
  );
}

export default App;
