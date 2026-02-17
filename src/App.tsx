import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Storia from './components/Storia';
import Prodotto from './components/Prodotto';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Ricette from './components/Ricette';
import RicettaDettaglio from './pages/RicettaDettaglio';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location]);

  return (
    <>
      <Hero id="home" />
      <Storia id="storia" />
      <Prodotto id="prodotto" />
      <Ricette id="ricette" />
      <Gallery id="eventi" />
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
