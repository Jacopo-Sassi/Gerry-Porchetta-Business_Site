import { Calendar, Users, PartyPopper } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Button from './Button';

export default function Gallery() {
  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Matrimoni Indimenticabili',
      description: 'La porchetta perfetta per il giorno più bello'
    },
    {
      url: 'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Eventi Aziendali',
      description: 'Catering professionale per ogni occasione'
    },
    {
      url: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sagre e Fiere',
      description: 'Portiamo la tradizione nelle piazze'
    },
    {
      url: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Feste Private',
      description: 'Rendere speciale ogni celebrazione'
    },
    {
      url: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mercati Locali',
      description: 'Ogni weekend nella tua città'
    },
    {
      url: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'La Nostra Comunità',
      description: 'Insieme condividiamo la passione'
    }
  ];

  const eventServices = [
    {
      icon: Users,
      title: 'Matrimoni & Cerimonie',
      description: 'Porchetta cucinata in loco con servizio completo al taglio. Include contorni, pane e allestimento.',
      minGuests: 50,
      priceFrom: 15
    },
    {
      icon: PartyPopper,
      title: 'Feste Private',
      description: 'Perfetto per compleanni, anniversari e celebrazioni familiari. Vassoi preparati con cura.',
      minGuests: 20,
      priceFrom: 12
    },
    {
      icon: Calendar,
      title: 'Eventi Aziendali',
      description: 'Catering professionale per meeting, inaugurazioni e team building. Servizio puntuale e impeccabile.',
      minGuests: 30,
      priceFrom: 13
    }
  ];

  return (
    <section id="eventi" className="py-24 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle
          title="Galleria & Eventi"
          subtitle="Ogni evento è un'occasione per condividere la passione per la buona cucina"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-80"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                <p className="text-stone-200 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Il Tuo Evento Speciale</h3>
            <p className="text-xl text-amber-50 max-w-3xl mx-auto">
              Rendiamo indimenticabile ogni momento con la nostra porchetta artigianale
              e un servizio impeccabile
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {eventServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-amber-50 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Minimo:</span>
                    <span>{service.minGuests} persone</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Da:</span>
                    <span className="text-xl font-bold">€{service.priceFrom}</span>
                    <span>a persona</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = 'tel:+393331234567'}
            >
              Richiedi un Preventivo
            </Button>
          </div>
        </div>

        <div className="bg-stone-100 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-stone-800 mb-4">Dove Trovarci</h3>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Ogni weekend siamo presenti nei principali mercati e fiere della regione.
            Seguici sui social per scoprire dove saremo!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-4 rounded-full shadow-md">
              <p className="font-semibold text-stone-800">Sabato: Mercato di Piazza Grande</p>
            </div>
            <div className="bg-white px-6 py-4 rounded-full shadow-md">
              <p className="font-semibold text-stone-800">Domenica: Fiera di San Lorenzo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
