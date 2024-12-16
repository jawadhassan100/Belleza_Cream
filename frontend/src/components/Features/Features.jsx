import featureImage1 from "../../assets/natural.jpg"; 
import featureImage2 from "../../assets/hydration.jpg"; 
import featureImage3 from "../../assets/absorbtion.webp"; 

const Features = () => {
  return (
    <section className="bg-purple-100 py-16 px-6 md:px-16 lg:px-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-800">
          Features
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Discover the unique qualities that make <strong>BELLEZA</strong> your
          perfect choice for glowing skin.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Feature 1 */}
        <div className="bg-white hover:scale-105 transition-all rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
        <img
            src={featureImage1}
            alt="Deep Hydration"
            className="w-28 h-28 mb-4 rounded-full object-cover"
          />
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">
            Natural Ingredients
          </h3>
          <p className="text-gray-600">
            Formulated with 100% natural extracts, including Glutathione and
            Vitamin E, for healthy and glowing skin.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white hover:scale-105 transition-all rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
          <img
            src={featureImage2}
            alt="Deep Hydration"
            className="w-[100px] mb-4 rounded-full object-cover"
          />
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">
            Deep Hydration
          </h3>
          <p className="text-gray-600">
            Provides long-lasting moisture that penetrates deep into your skin
            for a soft and radiant glow.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white hover:scale-105 transition-all rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
          <img
            src={featureImage3}
            alt="Fast Absorption"
            className="w-28 h-28 mb-4 rounded-full object-cover"
          />
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">
            Fast Absorption
          </h3>
          <p className="text-gray-600">
            Non-greasy formula that absorbs quickly, leaving your skin fresh and
            smooth all day long.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
