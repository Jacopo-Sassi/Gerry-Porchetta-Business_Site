import SectionTitle from "./SectionTitle";

export default function Prodotto() {
  const features = [
    {
      image: "/src/assets/images/description-1.jpeg",
      title: "La Croccantezza che Risuona",
      description:
        "La cotenna perfettamente dorata, croccante sotto i denti, è il risultato di ore di cottura lenta e sapiente. Ogni morso è una sinfonia di consistenze.",
    },
    {
      image: "/src/assets/images/description-2.jpeg",
      title: "L'Aroma che Invade la Stanza",
      description:
        "Finocchietto selvatico, rosmarino fresco e aglio si fondono in un profumo inebriante che risveglia i sensi e anticipa il piacere del gusto.",
    },
    {
      image: "/src/assets/images/description-3.jpeg",
      title: "La Carne Tenera e Succosa",
      description:
        "Sotto la crosta dorata si cela una carne morbida, succosa, scioglievole. Ogni strato racconta la maestria della nostra lavorazione artigianale.",
    },
    {
      image: "/src/assets/images/description-4.jpeg",
      title: "Gli Ingredienti della Tradizione",
      description:
        "Sale marino di Sicilia, pepe nero macinato fresco, erbe raccolte a mano. Ogni ingrediente è scelto per esaltare, mai per nascondere.",
    },
  ];

  return (
    <section
      id="prodotto"
      className="py-24 bg-gradient-to-b from-white to-stone-50"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle
          title="L'Arte della Porchetta"
          subtitle="Ogni porchetta è un capolavoro di sapori, aromi e consistenze che celebra la tradizione italiana"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-stone-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Il Segreto della Perfezione
          </h3>
          <p className="text-xl text-amber-50 max-w-3xl mx-auto leading-relaxed">
            Ogni porchetta viene cotta per oltre 5 ore nel nostro forno a legna
            di quercia. La temperatura, l'umidità, la rotazione: ogni dettaglio
            è controllato con la precisione di un orologiaio svizzero e la
            passione di un artista italiano.
          </p>
        </div>
      </div>
    </section>
  );
}
