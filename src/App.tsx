import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Storia from './components/Storia';
import Prodotto from './components/Prodotto';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Ricette from './components/Ricette';
import RicettaDettaglio from './pages/RicettaDettaglio';
import ScrollToTop from './components/ScrollToTop';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    const sectionId = location.state.scrollTo;

    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 100);
      }
    };

    setTimeout(() => tryScroll(), 100);
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
      <ScrollToTop />
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