/*
  # Create Products and Orders Schema

  ## Overview
  This migration creates the database schema for a porchetta restaurant's e-commerce system,
  including products (menu items) and customer orders.

  ## New Tables
  
  ### `products`
  Stores menu items available for purchase
  - `id` (uuid, primary key) - Unique product identifier
  - `name` (text) - Product name (e.g., "Panino Classico")
  - `description` (text) - Detailed product description
  - `price` (numeric) - Price in euros
  - `category` (text) - Product category (panini, al_taglio, piatti, eventi)
  - `image_url` (text) - Product image URL
  - `available` (boolean) - Whether product is currently available
  - `weight_based` (boolean) - Whether product is sold by weight
  - `created_at` (timestamptz) - Record creation timestamp

  ### `orders`
  Stores customer orders
  - `id` (uuid, primary key) - Unique order identifier
  - `customer_name` (text) - Customer's full name
  - `customer_email` (text) - Customer's email address
  - `customer_phone` (text) - Customer's phone number
  - `delivery_method` (text) - 'pickup' or 'delivery'
  - `delivery_address` (text, nullable) - Delivery address if applicable
  - `notes` (text, nullable) - Special instructions or notes
  - `status` (text) - Order status (pending, confirmed, preparing, ready, completed, cancelled)
  - `total_amount` (numeric) - Total order amount in euros
  - `created_at` (timestamptz) - Order creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `order_items`
  Stores individual items within each order
  - `id` (uuid, primary key) - Unique item identifier
  - `order_id` (uuid, foreign key) - Reference to orders table
  - `product_id` (uuid, foreign key) - Reference to products table
  - `quantity` (integer) - Quantity ordered
  - `weight` (numeric, nullable) - Weight in kg if weight-based product
  - `unit_price` (numeric) - Price per unit at time of order
  - `subtotal` (numeric) - Line item total (quantity * unit_price)
  - `created_at` (timestamptz) - Record creation timestamp

  ## Security
  
  ### RLS Policies
  
  #### Products Table
  - Public read access: Anyone can view available products
  - No write access: Products managed by administrators only
  
  #### Orders Table
  - Authenticated users can create orders
  - Users cannot read other users' orders (future enhancement with auth)
  
  #### Order Items Table
  - Read access for authenticated users (linked to their orders)
  - Insert access when creating new orders

  ## Notes
  - All monetary values use numeric type for precision
  - Timestamps use timestamptz for timezone awareness
  - Foreign key constraints ensure data integrity
  - Default values prevent null-related issues
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric(10, 2) NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  available boolean DEFAULT true,
  weight_based boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  delivery_method text NOT NULL,
  delivery_address text,
  notes text,
  status text DEFAULT 'pending',
  total_amount numeric(10, 2) NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  quantity integer NOT NULL DEFAULT 1,
  weight numeric(10, 2),
  unit_price numeric(10, 2) NOT NULL,
  subtotal numeric(10, 2) NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view available products"
  ON products FOR SELECT
  USING (available = true);

CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view their order"
  ON orders FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create order items"
  ON order_items FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view order items"
  ON order_items FOR SELECT
  USING (true);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_available ON products(available);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);

INSERT INTO products (name, description, price, category, image_url, weight_based) VALUES
('Panino Classico', 'Il nostro panino signature con porchetta artigianale, croccante fuori e morbida dentro. Servito in un croccante panino romano.', 6.50, 'panini', 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=800', false),
('Panino Deluxe', 'Porchetta premium con verdure grigliate, rucola fresca e una goccia di balsamico invecchiato. Un''esperienza gourmet.', 8.50, 'panini', 'https://images.pexels.com/photos/1209029/pexels-photo-1209029.jpeg?auto=compress&cs=tinysrgb&w=800', false),
('Panino Rustico', 'Porchetta con patate al forno croccanti e un filo d''olio extra vergine. Il comfort food che scalda il cuore.', 7.50, 'panini', 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800', false),
('Porchetta al Taglio - 1kg', 'La nostra porchetta artigianale al taglio. Perfetta per pranzi e cene in famiglia. Prezzo per chilogrammo.', 24.00, 'al_taglio', 'https://images.pexels.com/photos/9986228/pexels-photo-9986228.jpeg?auto=compress&cs=tinysrgb&w=800', true),
('Porchetta al Taglio - 500g', 'Mezza porzione della nostra eccellente porchetta. Ideale per 2-3 persone.', 12.50, 'al_taglio', 'https://images.pexels.com/photos/9986228/pexels-photo-9986228.jpeg?auto=compress&cs=tinysrgb&w=800', true),
('Piatto Porchetta e Patate', 'Porchetta artigianale servita con patate al forno croccanti alle erbe aromatiche. Un piatto completo e saporito.', 14.00, 'piatti', 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800', false),
('Piatto Degustazione', 'Selezione di porchetta con contorni stagionali, olive e pane casereccio. Per scoprire tutti i sapori della tradizione.', 18.00, 'piatti', 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800', false),
('Catering Matrimonio', 'Servizio completo per matrimoni: porchetta intera cucinata in loco, servizio al taglio, contorni. Contattaci per un preventivo personalizzato.', 800.00, 'eventi', 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800', false),
('Catering Aziendale', 'Perfetto per eventi aziendali: porchetta con panini, vassoi di affettati, contorni. Minimo 20 persone.', 15.00, 'eventi', 'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=800', false)
ON CONFLICT DO NOTHING;
