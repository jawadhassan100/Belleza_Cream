
import bgHero from "../../assets/bgHero.jpg";

const Hero = ({ onScrollToProducts }) => {
 
  return (
    <section
      className="relative h-screen flex items-center z-20 justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-700/60 to-black/40 -z-10"></div>
      <div className="text-center text-white px-4 sm:px-8 md:px-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Discover <span className="text-purple-300">Natural Glow</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Introducing <strong>BELLEZA</strong> — an all-natural extract cream
          enriched with Glutathione & Vitamin E for radiant, healthy skin.
        </p>
        <button 
        onClick={onScrollToProducts}
        className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-800 transition duration-300">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Hero;

