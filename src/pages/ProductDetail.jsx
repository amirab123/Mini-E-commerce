import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));

  // 🔒 sécurité
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl text-red-500 mb-4">
          Produit introuvable
        </h2>

        <button
          onClick={() => navigate("/")}
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Retour accueil
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full grid md:grid-cols-2 overflow-hidden">

        {/* Image */}
        <div className="h-96 md:h-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Infos */}
        <div className="p-8 flex flex-col justify-between">

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {product.name}
            </h1>

            <p className="text-gray-500 mt-2 capitalize">
              Catégorie : {product.category}
            </p>

            <p className="text-gray-600 mt-4">
              Produit de qualité avec design moderne.
            </p>

            <p className="text-2xl text-red-500 font-semibold mt-6">
              {product.price} $
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-8">

            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition font-semibold"
            >
              Ajouter au panier
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex-1 bg-gray-200 py-3 rounded-xl hover:bg-gray-300 transition"
            >
              Retour
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetail;