import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Storia from './components/Storia';
import Prodotto from './components/Prodotto';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Ricette from './components/Ricette';
import RicettaDettaglio from './pages/RicettaDettaglio';

function Home() {
  return (
    <>
      <Hero />
      <Storia />
      <Prodotto />
      <Ricette />
      <Gallery />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ricette/:id" element={<RicettaDettaglio />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
