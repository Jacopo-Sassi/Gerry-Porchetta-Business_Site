import { useState } from "react";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Button from "./Button";

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  available: boolean;
  weight_based: boolean;
  created_at: string;
  cartQuantity: number;
  cartWeight?: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateCart: (items: CartItem[]) => void;
}

export default function Cart({
  isOpen,
  onClose,
  items,
  onUpdateCart,
}: CartProps) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    delivery_method: "pickup" as "pickup" | "delivery",
    delivery_address: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.cartQuantity,
    0
  );

  const updateQuantity = (productId: string, delta: number) => {
    const updatedCart = items
      .map((item) => {
        if (item.id === productId) {
          const newQuantity = Math.max(0, item.cartQuantity + delta);
          return { ...item, cartQuantity: newQuantity };
        }
        return item;
      })
      .filter((item) => item.cartQuantity > 0);

    onUpdateCart(updatedCart);
  };

  const removeItem = (productId: string) => {
    onUpdateCart(items.filter((item) => item.id !== productId));
  };

  // ✅ Nuova versione senza Supabase
  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simuliamo invio ordine locale
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulazione ritardo
      setOrderSuccess(true);
      onUpdateCart([]);
      setTimeout(() => {
        setOrderSuccess(false);
        setIsCheckout(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Errore durante l'invio dell'ordine. Riprova.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-stone-200 flex justify-between items-center bg-gradient-to-r from-amber-50 to-amber-100">
            <h2 className="text-2xl font-bold text-stone-800 flex items-center gap-2">
              <ShoppingBag className="text-amber-600" />
              {isCheckout ? "Completa Ordine" : "Il Tuo Carrello"}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-stone-200 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {orderSuccess ? (
              <div className="text-center py-12">
                <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-2">
                  Ordine Ricevuto!
                </h3>
                <p className="text-stone-600">
                  Ti contatteremo presto per confermare.
                </p>
              </div>
            ) : isCheckout ? (
              <form onSubmit={handleSubmitOrder} className="space-y-6">
                {/* Form checkout */}
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.customer_name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        customer_name: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.customer_email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        customer_email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.customer_phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        customer_phone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Metodo di Consegna *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input
                        type="radio"
                        name="delivery_method"
                        value="pickup"
                        checked={formData.delivery_method === "pickup"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            delivery_method: "pickup",
                          })
                        }
                        className="sr-only"
                      />
                      <div
                        className={`p-4 border-2 rounded-lg text-center transition-all ${
                          formData.delivery_method === "pickup"
                            ? "border-amber-600 bg-amber-50"
                            : "border-stone-300"
                        }`}
                      >
                        <p className="font-semibold">Ritiro</p>
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input
                        type="radio"
                        name="delivery_method"
                        value="delivery"
                        checked={formData.delivery_method === "delivery"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            delivery_method: "delivery",
                          })
                        }
                        className="sr-only"
                      />
                      <div
                        className={`p-4 border-2 rounded-lg text-center transition-all ${
                          formData.delivery_method === "delivery"
                            ? "border-amber-600 bg-amber-50"
                            : "border-stone-300"
                        }`}
                      >
                        <p className="font-semibold">Consegna</p>
                      </div>
                    </label>
                  </div>
                </div>

                {formData.delivery_method === "delivery" && (
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Indirizzo di Consegna *
                    </label>
                    <textarea
                      required
                      value={formData.delivery_address}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          delivery_address: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      rows={3}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Note (opzionale)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    rows={3}
                    placeholder="Allergie, preferenze, orario di ritiro..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setIsCheckout(false)}
                    className="flex-1 px-6 py-3 border-2 border-stone-300 text-stone-700 rounded-full font-semibold hover:bg-stone-100 transition-colors"
                  >
                    Indietro
                  </button>
                  <Button type="submit" variant="primary" className="flex-1">
                    {submitting ? "Invio..." : "Conferma Ordine"}
                  </Button>
                </div>
              </form>
            ) : (
              <>
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag
                      size={64}
                      className="mx-auto text-stone-300 mb-4"
                    />
                    <p className="text-xl text-stone-600">
                      Il tuo carrello è vuoto
                    </p>
                    <p className="text-stone-500 mt-2">
                      Aggiungi prodotti dal menu!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 bg-stone-50 rounded-xl"
                      >
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-stone-800">
                            {item.name}
                          </h4>
                          <p className="text-amber-600 font-bold">
                            €{item.price.toFixed(2)}
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 hover:bg-stone-200 rounded-full transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="font-semibold">
                              {item.cartQuantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 hover:bg-stone-200 rounded-full transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="ml-auto p-2 hover:bg-red-100 text-red-600 rounded-full transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {!isCheckout && !orderSuccess && items.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-stone-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-stone-700">
                  Totale
                </span>
                <span className="text-2xl font-bold text-amber-600">
                  €{total.toFixed(2)}
                </span>
              </div>
              <Button
                onClick={() => setIsCheckout(true)}
                variant="primary"
                size="lg"
                className="w-full"
              >
                Procedi al Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
