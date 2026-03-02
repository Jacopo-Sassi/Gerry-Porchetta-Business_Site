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
    name: "Porchetta al Gel di Limone",
    description:
      "Un'esplosione di sapori che unisce la succulenza della porchetta alla freschezza del gel di limone.",
    category: "Antipasti",
    image_url: "/src/assets/images/porchetta-gel-al-limone.jpeg",
    available: true,
    weight_based: false,
    created_at: new Date().toISOString(),

    // NUOVI CAMPI
    ingredients: [
      "500g di porchetta di qualità",
      "Gel di limone fresco",
      "Sale e pepe q.b.",
      "Rosmarino fresco",
      "Olio extravergine d'oliva",
    ],
    steps: [
      "Preriscaldare il forno a 180°C.",
      "Massaggiare la porchetta con sale, pepe e rosmarino.",
      "Cuocere in forno per 90 minuti fino a doratura.",
      "Preparare il gel di limone e lasciare raffreddare.",
      "Servire la porchetta con un cucchiaio di gel di limone sopra.",
    ],
    chefNotes:
      "Per un risultato ancora più croccante, spennellare la pelle con olio d'oliva ogni 30 minuti di cottura.",
  },
  {
    id: "2",
    name: "Ciabatta Romana con Porchetta, Cicoria e Nocciole",
    description:
      "Un incontro tra tradizione e innovazione: porchetta croccante, cicoria ripassata e nocciole tostate in ciabatta romana artigianale. Ispirata alla grande cucina italiana.",
    category: "panini_gourmet",
    image_url: "/src/assets/images/ciabatta-romana-porchetta-cicoria.jpeg",
    available: true,
    weight_based: false,
    created_at: new Date().toISOString(),

    ingredients: [
      "1 ciabatta romana artigianale",
      "200g di porchetta croccante",
      "Cicoria fresca",
      "Nocciole tostate tritate grossolanamente",
      "Aglio",
      "Olio extravergine d'oliva",
      "Pepe nero",
    ],
    steps: [
      "Ripassare la cicoria in padella con aglio e olio.",
      "Scaldare la porchetta fino a renderla croccante.",
      "Tagliare la ciabatta e scaldarla leggermente.",
      "Farcire con cicoria, porchetta e completare con nocciole tostate.",
      "Servire caldo per esaltare il contrasto di texture.",
    ],
    chefNotes:
      "Il segreto è nel contrasto: l'amaro elegante della cicoria deve bilanciare la ricchezza della porchetta e la croccantezza delle nocciole.",
  },
  {
    id: "3",
    name: "Gnocchi con Ragù Bianco di Porchetta e Finocchietto",
    description:
      "Un primo piatto avvolgente dove la porchetta diventa protagonista in un ragù bianco profumato al finocchietto selvatico.",
    category: "primi_piatti",
    image_url: "/src/assets/images/gnocchi-porchetta.jpeg",
    available: true,
    weight_based: false,
    created_at: new Date().toISOString(),

    ingredients: [
      "800g di gnocchi di patate freschi",
      "300g di porchetta tritata al coltello",
      "Finocchietto selvatico",
      "Scalogno",
      "Vino bianco",
      "Brodo vegetale",
      "Parmigiano Reggiano",
      "Olio extravergine d'oliva",
    ],
    steps: [
      "Soffriggere lo scalogno con olio extravergine.",
      "Aggiungere la porchetta tritata e rosolare dolcemente.",
      "Sfumare con vino bianco e aggiungere poco brodo.",
      "Profumare con finocchietto tritato.",
      "Cuocere gli gnocchi, saltarli nel ragù e mantecare con Parmigiano.",
    ],
    chefNotes:
      "Non salare troppo: la porchetta rilascia già una sapidità intensa e naturale.",
  },
  {
    id: "4",
    name: "Porchetta Scottata con Salsa Verde e Patate Arrosto",
    description:
      "Fette spesse di porchetta scottate in padella, servite con salsa verde alle erbe fresche e patate arrosto croccanti.",
    category: "secondi_piatti",
    image_url: "/src/assets/images/porchetta--salsa-verde.jpeg",
    available: true,
    weight_based: true,
    created_at: new Date().toISOString(),

    ingredients: [
      "1kg di porchetta tagliata spessa",
      "Prezzemolo fresco",
      "Capperi",
      "Acciughe",
      "Pane raffermo ammollato",
      "Aceto di vino bianco",
      "Patate",
      "Rosmarino",
      "Olio extravergine d'oliva",
    ],
    steps: [
      "Tagliare la porchetta a fette spesse.",
      "Scottarla in padella fino a formare una crosticina croccante.",
      "Preparare la salsa verde frullando prezzemolo, capperi, acciughe e pane ammollato.",
      "Cuocere le patate al forno con rosmarino e olio.",
      "Servire la porchetta con salsa verde e patate ben dorate.",
    ],
    chefNotes:
      "La scottatura deve essere veloce e intensa per mantenere la porchetta morbida all'interno e croccante fuori.",
  },
];
