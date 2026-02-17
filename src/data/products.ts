export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  available: boolean;
  weight_based: boolean;
  created_at: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Porchetta al Gel di Limone",
    description:
      "Porchetta al gel di limone: un'esplosione di sapori che unisce la succulenza della porchetta alla freschezza del gel di limone.",
    price: 18,
    category: "antipasti",
    image_url: "/src/assets/images/porchetta-gel-al-limone.jpeg",
    available: true,
    weight_based: false,
    created_at: new Date().toISOString(),
  },
];
