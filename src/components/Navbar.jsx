import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-gray-800 hover:text-green-500 transition"
        >
          🛒 Boutique
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="text-gray-600 hover:text-green-500 transition font-medium"
          >
            Accueil
          </Link>

          {/* Panier */}
          <Link
            to="/checkout"
            className="relative bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition flex items-center gap-2"
          >
            🛒 Panier

            {/* badge */}
            <span className="bg-white text-green-600 text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;