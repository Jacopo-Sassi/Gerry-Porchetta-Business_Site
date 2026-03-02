// types.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image_url: string;
  available: boolean;
  weight_based: boolean;
  created_at: string;

  // NUOVI CAMPI PER LA RICETTA
  ingredients: string[];
  steps: string[];
  chefNotes?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Tartare di Porchetta con Gelo al Limone",
    description:
      "Un antipasto gourmet che celebra il contrasto tra dolcezza, sapidità e freschezza.",
    category: "Antipasti",
    image_url: "/src/assets/images/porchetta-gel-al-limone.jpeg",
    available: true,
    weight_based: false,
    created_at: new Date().toISOString(),

    ingredients: [
      "150g di porchetta artigianale (senza cotenna)",
      "2 percoche mature ma sode",
      "60ml di vino rosato aromatico",
      "Foglioline di menta fresca",
      "1 cucchiaino di miele millefiori",
      "100g di succo di limone filtrato",
      "1g di agar agar",
      "Un pizzico di pepe nero macinato fresco",
    ],

    steps: [
      "Preparare il gelo al limone: unire il succo filtrato con l’agar agar, portare a ebollizione mescolando con una frusta. Spegnere e lasciare raffreddare fino a completa gelificazione.",
      "Frullare il composto gelificato fino a ottenere una crema liscia e setosa. Riporre in frigorifero per almeno 2 ore.",
      "Tagliare le percoche a brunoise regolare e marinarle con il vino rosato e menta spezzettata per circa 1 ora in frigorifero.",
      "Eliminare la cotenna dalla porchetta e batterla finemente al coltello fino a ottenere una tartare dalla texture rustica ma uniforme.",
      "Con l’aiuto di un coppapasta, impiattare: base di percoche scolate, strato compatto di tartare di porchetta, quenelle di gelo al limone.",
      "Completare con una goccia di miele, pepe nero macinato al momento e una fogliolina di menta fresca.",
    ],

    chefNotes:
      "La chiave è l’equilibrio: la dolcezza della frutta deve dialogare con la sapidità della porchetta, mentre l’acidità del limone pulisce il palato. Per una versione ancora più raffinata, sostituire il miele con una riduzione leggera di vino rosato o aggiungere scorza di limone grattugiata finemente al momento del servizio. Servire ben freddo per esaltare i contrasti.",
  },
  {
    id: "2",
    name: "Ciabatta Romana Croccante con Porchetta, Cicoria Ripassata e Nocciole Tostate",
    description:
      "Un panino gourmet che reinterpreta la tradizione romana in chiave contemporanea.",
    category: "Panini Gourmet",
    image_url: "/src/assets/images/ciabatta-romana-porchetta-cicoria.jpeg",
    available: true,
    weight_based: false,
    created_at: new Date().toISOString(),

    ingredients: [
      "1 ciabatta romana artigianale a lievitazione naturale",
      "200g di porchetta artigianale croccante",
      "Cicoria fresca",
      "Nocciole piemontesi tostate e spezzate",
      "1 spicchio d’aglio",
      "Olio extravergine d'oliva di alta qualità",
      "Pepe nero macinato fresco",
      "Un pizzico di sale marino (se necessario)",
    ],

    steps: [
      "Mondare e lessare brevemente la cicoria, quindi ripassarla in padella con olio extravergine e aglio fino a ottenere una consistenza morbida ma ancora viva.",
      "Tagliare la porchetta a fette generose e scaldarla su piastra rovente per esaltarne la croccantezza esterna mantenendo l’interno succoso.",
      "Aprire la ciabatta e tostarla leggermente per ottenere una superficie fragrante e dorata.",
      "Disporre uno strato uniforme di cicoria come base, adagiare la porchetta calda e completare con nocciole tostate spezzate grossolanamente.",
      "Ultimare con una macinata di pepe nero fresco e servire immediatamente.",
    ],

    chefNotes:
      "Il segreto sta nell’equilibrio tra amaro e grasso: la cicoria deve essere intensa ma non dominante, mentre la porchetta deve rimanere protagonista. Per una versione ancora più raffinata, aggiungere qualche goccia di riduzione di vino rosso o una crema leggera di pecorino romano per amplificare la complessità aromatica.",
  },
  {
    id: "3",
    name: "Gnocchi Artigianali con Ragù Bianco di Porchetta e Finocchietto Selvatico",
    description:
      "Un primo piatto elegante e avvolgente che valorizza la porchetta artigianale in una raffinata interpretazione in bianco.",
    category: "Primi Piatti",
    image_url: "/src/assets/images/gnocchi-porchetta.jpeg",
    available: true,
    weight_based: false,
    created_at: new Date().toISOString(),

    ingredients: [
      "800g di gnocchi di patate artigianali",
      "300g di porchetta tritata finemente al coltello",
      "Finocchietto selvatico fresco",
      "1 scalogno delicato",
      "60ml di vino bianco secco",
      "Brodo vegetale leggero",
      "Parmigiano Reggiano 24 mesi grattugiato",
      "Olio extravergine d'oliva di alta qualità",
      "Pepe nero macinato fresco",
    ],

    steps: [
      "Tritare finemente lo scalogno e farlo appassire dolcemente in olio extravergine senza colorirlo.",
      "Aggiungere la porchetta battuta al coltello e rosolare a fuoco medio fino a sprigionare i profumi, mantenendo la carne morbida.",
      "Sfumare con vino bianco secco e lasciare evaporare l’alcol.",
      "Unire un mestolino di brodo caldo per creare una base cremosa e profumare con finocchietto selvatico tritato finemente.",
      "Cuocere gli gnocchi in abbondante acqua salata, scolarli delicatamente e saltarli nel ragù per amalgamare i sapori.",
      "Mantecare fuori dal fuoco con Parmigiano Reggiano e una macinata di pepe nero fresco.",
    ],

    chefNotes:
      "La mantecatura è fondamentale: deve avvenire fuori dal fuoco per ottenere una consistenza vellutata e avvolgente. Il finocchietto dona freschezza e alleggerisce la ricchezza della porchetta. Per una versione ancora più sofisticata, aggiungere una leggera grattugiata di scorza di limone non trattato o una crema delicata di ricotta setacciata.",
  },
  {
    id: "4",
    name: "Porchetta Scottata, Salsa Verde alle Erbe Nobili e Patate Arrosto al Rosmarino",
    description:
      "Un secondo piatto intenso e raffinato che esalta la porchetta artigianale attraverso una scottatura ad alta temperatura.",
    category: "Secondi Piatti",
    image_url: "/src/assets/images/porchetta-salsa-verde.jpeg",
    available: true,
    weight_based: true,
    created_at: new Date().toISOString(),

    ingredients: [
      "1kg di porchetta artigianale tagliata a fette spesse",
      "Prezzemolo fresco selezionato",
      "Capperi dissalati",
      "Filetti di acciughe di qualità",
      "Pane rustico ammollato in aceto di vino bianco",
      "Aceto di vino bianco delicato",
      "Patate a pasta gialla",
      "Rosmarino fresco",
      "Olio extravergine d'oliva di alta qualità",
      "Pepe nero macinato fresco",
      "Sale marino q.b.",
    ],

    steps: [
      "Tagliare la porchetta in fette spesse circa 2 cm per garantire una consistenza succosa al centro.",
      "Scaldare una padella pesante o una piastra in ghisa fino a temperatura elevata e scottare la porchetta senza aggiunta di grassi, fino a ottenere una crosticina dorata e croccante.",
      "Preparare la salsa verde frullando prezzemolo, capperi, acciughe e pane ammollato con olio extravergine, regolando di acidità con qualche goccia di aceto.",
      "Tagliare le patate a spicchi regolari, condirle con olio, sale e rosmarino e cuocerle in forno ventilato a 200°C fino a doratura uniforme.",
      "Impiattare disponendo la porchetta leggermente sovrapposta, nappare con salsa verde e accompagnare con patate arrosto croccanti.",
    ],

    chefNotes:
      "La scottatura deve essere rapida e intensa: l’obiettivo è creare contrasto tra crosta croccante e interno morbido. La salsa verde deve risultare brillante e fresca, mai ossidata. Per una versione ancora più elegante, aggiungere una polvere leggera di rosmarino essiccato o qualche fiocco di sale affumicato al momento del servizio.",
  },
];
