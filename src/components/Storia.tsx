import { Leaf, Flame, Award } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Storia() {
  const values = [
    {
      icon: Leaf,
      title: "Ingredienti Pregiati",
      description:
        "Selezioniamo solo maiali di razze italiane pregiate, cresciuti nel rispetto della tradizione e del benessere animale.",
    },
    {
      icon: Flame,
      title: "Cottura a Legna",
      description:
        "La cottura lenta a legna per oltre 5 ore garantisce quella croccantezza inconfondibile e un sapore autentico.",
    },
    {
      icon: Award,
      title: "Ricetta Tradizionale",
      description:
        "Finocchietto selvatico, rosmarino, aglio e sale marino: la ricetta della nonna, tramandata con passione dal 1952.",
    },
  ];

  return (
    <section id="storia" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle
          title="La Nostra Storia"
          subtitle="Una tradizione di famiglia che profuma di casa, di focolare, di autenticità"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="prose prose-lg text-stone-700 space-y-6">
              <p className="text-xl leading-relaxed">
                Da due generazioni la famiglia Longobardi seleziona, alleva e
                commercia i migliori capi suini: ci occupiamo solo di carni
                pregiate, seguendo la ricetta tramandata in famiglia per la
                lavorazione della porchetta.
              </p>
              <p className="leading-relaxed">
                Quella che vi proponiamo è una porchetta preparata secondo{" "}
                <strong>la ricetta tradizionale italiana</strong>, di
                antichissima origine: si narra risalga al popolo dei Latini,
                vissuto in Italia prima dell’arrivo dei Romani e degli Etruschi
                e il nome stesso “porchetta” sembra nascere dalla consuetudine
                di prediligere per la preparazione della porchetta la carne più
                tenera delle giovani femmine. Nata per il sacrificio agli Dei,
                oggi la porchetta è apprezzata da tutti gli umani: non a caso il
                New York Times l’ha inserita tra i cinque cibi più buoni al
                mondo!
              </p>
              <p className="leading-relaxed">
                A Mugnano del Cardinale e in provincia di Avellino, Porchetta
                Longobardi offre una scelta ampia di prodotti, come busti di
                porchetta, carne di maiale, filetto di suino, porchetta arrosto,
                porchetta artigianale, porchetta di bevagna, salumi di suino
                nero, tronchetto di porchetta.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="src/assets/images/story.jpeg"
                alt="Laboratorio artigianale"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-4 border-amber-400">
              <p className="text-5xl font-bold text-amber-600">70+</p>
              <p className="text-stone-600 font-semibold">Anni di Tradizione</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-amber-500"
            >
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <value.icon className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">
                {value.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
