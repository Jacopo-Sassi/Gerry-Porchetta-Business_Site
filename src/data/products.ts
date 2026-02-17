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
];
