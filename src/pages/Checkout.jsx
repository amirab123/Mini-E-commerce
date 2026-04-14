import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [message, setMessage] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    if (cart.length === 0) {
      setMessage("❌ Votre panier est vide, impossible de passer la commande.");
      return;
    }

    setMessage("✅ Commande passée avec succès !");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          🛒 Mon Panier
        </h1>

        {/* Message */}
        {message && (
          <div className="mb-4 p-3 rounded-lg bg-white shadow text-center text-sm font-medium text-gray-700">
            {message}
          </div>
        )}

   git add .
        {cart.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow text-center">
            <p className="text-gray-500 text-lg">
              Votre panier est vide 😢
            </p>
          </div>
        ) : (
          <>
            {/* Products */}
            <div className="space-y-4">

              {cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-white flex justify-between items-center p-4 rounded-xl shadow"
                >

                  <div>
                    <h2 className="font-semibold text-gray-800">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 text-sm">
                      {item.price} $
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                  >
                    Supprimer
                  </button>

                </div>
              ))}

            </div>

            {/* Total */}
            <div className="mt-8 bg-white p-6 rounded-2xl shadow flex justify-between items-center">

              <h2 className="text-xl font-bold">
                Total
              </h2>

              <p className="text-2xl font-extrabold text-green-500">
                {total} $
              </p>

            </div>

            {/* Button */}
            <button
              onClick={handleOrder}
              className="mt-6 w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition"
            >
              Passer la commande
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default Checkout;