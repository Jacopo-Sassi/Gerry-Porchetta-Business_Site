import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-amber-500">🐷</span>
              Porchetta Tradizionale
            </h3>
            <p className="text-stone-400 leading-relaxed mb-6">
              Dal 1952 portiamo sulle vostre tavole la vera porchetta artigianale,
              seguendo la ricetta della tradizione italiana.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 p-3 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 p-3 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contatti</h4>
            <div className="space-y-4">
              <a
                href="tel:+393331234567"
                className="flex items-start gap-3 hover:text-amber-500 transition-colors group"
              >
                <Phone size={20} className="mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold">+39 333 123 4567</p>
                  <p className="text-sm text-stone-500">Lun-Dom, 8:00-20:00</p>
                </div>
              </a>
              <a
                href="mailto:info@porchettatradizionale.it"
                className="flex items-start gap-3 hover:text-amber-500 transition-colors group"
              >
                <Mail size={20} className="mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold">info@porchettatradizionale.it</p>
                  <p className="text-sm text-stone-500">Risposta entro 24h</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Via della Tradizione, 52</p>
                  <p className="text-sm text-stone-500">01100 Viterbo (VT), Italia</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Orari Bottega</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-amber-500" />
                <div>
                  <p className="font-semibold">Lunedì - Venerdì</p>
                  <p className="text-sm text-stone-500">8:00 - 13:00 | 16:00 - 19:30</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-amber-500" />
                <div>
                  <p className="font-semibold">Sabato</p>
                  <p className="text-sm text-stone-500">8:00 - 20:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-amber-500" />
                <div>
                  <p className="font-semibold">Domenica</p>
                  <p className="text-sm text-stone-500">9:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Certificazioni</h4>
            <div className="space-y-3">
              <div className="bg-stone-800 p-4 rounded-lg">
                <p className="font-semibold text-white mb-1">HACCP</p>
                <p className="text-sm text-stone-500">Sicurezza Alimentare Certificata</p>
              </div>
              <div className="bg-stone-800 p-4 rounded-lg">
                <p className="font-semibold text-white mb-1">Prodotto Artigianale</p>
                <p className="text-sm text-stone-500">Lavorazione Tradizionale</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8">
          <div className="bg-stone-800 rounded-2xl p-6 mb-8">
            <h4 className="text-lg font-bold text-white mb-4">📍 Dove Siamo</h4>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47733.89288648651!2d12.0978!3d42.4173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f1ff4a2b4b8ed%3A0x40b82c3688c7720!2sViterbo%2C%20VT!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="text-center text-stone-500">
            <p>&copy; {new Date().getFullYear()} Porchetta Tradizionale. Tutti i diritti riservati.</p>
            <p className="mt-2 text-sm">
              P.IVA: 01234567890 | Ricetta tramandata dal 1952 con passione e dedizione
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
