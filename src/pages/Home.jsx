import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home() {
  const [category, setCategory] = useState("");

  const filtered = products.filter((p) =>
    p.category.includes(category)
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Hero */}
      <div className="bg-white shadow-sm py-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          🛒 Boutique en ligne
        </h1>
        <p className="text-gray-500 mt-2">
          Découvrez nos meilleurs produits
        </p>
      </div>

      {/* Contenu */}
      <div className="p-6 max-w-6xl mx-auto flex-1 w-full">

        {/* Filter */}
        <div className="bg-white p-5 rounded-2xl shadow-md flex flex-col md:flex-row justify-between items-center gap-4">

          <h2 className="text-lg font-semibold text-gray-700">
            Filtrer par catégorie
          </h2>

          <select
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Toutes</option>
            <option value="phone">📱 Phone</option>
            <option value="laptop">💻 Laptop</option>
            <option value="audio">🎧 Audio</option>
          </select>

        </div>

        {/* Résultat */}
        <div className="flex justify-between items-center mt-8 mb-4">
          <h2 className="text-xl font-semibold text-gray-700">
            {filtered.length} produit(s)
          </h2>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg">
              Aucun produit trouvé 😢
            </p>
          </div>
        )}

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Home;