import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-10">

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

    
        <div>
          <h2 className="text-2xl font-extrabold text-gray-800">
            🛒 Boutique
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            Votre boutique en ligne moderne. Produits de qualité, livraison rapide et expérience utilisateur optimale.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">
            Navigation
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-gray-500 hover:text-green-500 transition">
                Accueil
              </Link>
            </li>

            <li>
              <Link to="/checkout" className="text-gray-500 hover:text-green-500 transition">
                Panier
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">
            Contact
          </h3>

          <p className="text-sm text-gray-500">📧 contact@shop.com</p>
          <p className="text-sm text-gray-500">📍 Montréal, Canada</p>
        </div>

      </div>

   
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Boutique - Tous droits réservés
      </div>

    </footer>
  );
}

export default Footer;