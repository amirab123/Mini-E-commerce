import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-xl p-4 shadow hover:scale-105 transition">

      <img src={product.image} className="w-full h-40 object-cover" />

      <h2 className="font-bold mt-2">{product.name}</h2>
      <p>{product.price}$</p>

      <div className="flex gap-2 mt-3">

        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Add
        </button>

        <Link
          to={`/product/${product.id}`}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          View
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;