
// import heroImage from "../../assets/heroImg.png"; 

// const Hero = () => {
//   return (
//     <section className="relative h-screen flex items-center justify-center bg-purple-100"
  
//     >
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-purple-300 to-purple-100 opacity-75 -z-10"></div>

//       {/* Content Wrapper */}
//       <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center px-6 md:px-16 lg:px-16 space-y-10 lg:space-y-0 lg:space-x-12">
//         {/* Left Section: Text */}
//         <div className="max-w-xl text-center -mt-5 md:text-left lg:text-left space-y-6">
//           <h1 className="text-5xl lg:text-6xl font-bold text-purple-800 leading-tight">
//             Discover <span className="text-purple-600">Natural Glow</span>
//           </h1>
//           <p className="text-[14px] sm:text-lg md:text-lg lg:text-lg  text-gray-600 leading-relaxed">
//             Introducing <strong>BELLEZA</strong> — an all-natural extract cream
//             enriched with Glutathione & Vitamin E for radiant, healthy skin.
//           </p>
//           {/* Buy Now Button */}
//           <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition duration-300">
//             Buy Now
//           </button>
//         </div>

//         {/* Right Section: Rotating Image */}
//         <div className="relative flex justify-center items-center">
//           <img
//             src={heroImage}
//             alt="BELEZA Cream"
//             className="w-80 -mt-16 sm:w-96 md:w-full lg:w-full lg:-mt-10 animate-spin-slow"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import bgHero from "../../assets/bgHero.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center z-20 justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-700/60 to-black/40 -z-10"></div>

      {/* Content Wrapper */}
      <div className="text-center text-white px-4 sm:px-8 md:px-12">
        {/* Main Text */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Discover <span className="text-purple-300">Natural Glow</span>
        </h1>
        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Introducing <strong>BELLEZA</strong> — an all-natural extract cream
          enriched with Glutathione & Vitamin E for radiant, healthy skin.
        </p>
        {/* Buy Now Button */}
        <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-800 transition duration-300">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Hero;

