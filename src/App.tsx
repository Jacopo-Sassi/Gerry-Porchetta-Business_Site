import Header from './components/Header';
import Hero from './components/Hero';
import Storia from './components/Storia';
import Prodotto from './components/Prodotto';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Ricette from './components/Ricette';

// Definiamo i tipi per le ricette
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

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <Hero />
      <Storia />
      <Prodotto />
      <Ricette/>
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
