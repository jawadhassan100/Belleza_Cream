
const Ingredients = () => {
  return (
    <section className="bg-gradient-to-br from-purple-200 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-purple-700 mb-8">
          Ingredients
        </h2>
        {/* Description */}
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Whiten with the power of{" "}
          <span className="font-semibold text-yellow-600">Vitamin-C</span>,{" "}
          <span className="font-semibold text-yellow-600">Niacinamide (Vitamin B3)</span>,{" "}
          <span className="font-semibold text-yellow-600">Salicylic Acid</span>,{" "}
          <span className="font-semibold text-yellow-600">Glycolic Acid</span>,{" "}
          <span className="font-semibold text-yellow-600">Peptides</span>,{" "}
          <span className="font-semibold text-yellow-600">Ceramides</span>,{" "}
          <span className="font-semibold text-yellow-600">Green Tea Extract</span>,{" "}
          <span className="font-semibold text-yellow-600">Tretinoin</span>,{" "}
          <span className="font-semibold text-yellow-600">Glutathione</span>,{" "}
          <span className="font-semibold text-yellow-600">Vitamin-E</span>,{" "}
          <span className="font-semibold text-yellow-600">Alpha Arbutin</span>,{" "}
          <span className="font-semibold text-yellow-600">Licorice Root Extract</span>,{" "}
          <span className="font-semibold text-yellow-600">Kojic Acid</span>,{" "}
          <span className="font-semibold text-yellow-600">Retinol</span>, and{" "}
          <span className="font-semibold text-yellow-600">Azelaic Acid</span>.
        </p>
        {/* Styled Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Individual Ingredient Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-purple-600 mb-2">
              Vitamin-C
            </h3>
            <p className="text-gray-600">
              Promotes bright and even skin tone with powerful antioxidants.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-purple-600 mb-2">
              Niacinamide
            </h3>
            <p className="text-gray-600">
              Vitamin B3 that reduces inflammation and strengthens the skin barrier.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-purple-600 mb-2">
              Glycolic Acid
            </h3>
            <p className="text-gray-600">
              Gently exfoliates for smoother, younger-looking skin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients