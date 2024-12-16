import { FaThumbsUp, FaRocket, FaHandshake } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <>
    <section className="bg-gradient-to-r from-purple-600 to-purple-400 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-white mb-8">
          Why Choose Us?
        </h2>
        <p className="text-xl font-semibold mb-16 text-gray-200">
          We&apos;re dedicated to providing you with the best services, and here&apos;s why.
        </p>

        {/* Cards for Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* First Card */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center text-5xl text-purple-600 mb-4">
              <FaThumbsUp />
            </div>
            <h3 className="text-2xl font-bold mb-4">Customer Satisfaction</h3>
            <p className="text-lg">
              We prioritize your satisfaction by providing top-notch quality and exceptional customer service.
            </p>
          </div>

          {/* Second Card */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center text-5xl text-purple-600 mb-4">
              <FaRocket />
            </div>
            <h3 className="text-2xl font-bold mb-4">Innovative Solutions</h3>
            <p className="text-lg">
              Our team uses cutting-edge technology to bring innovative and efficient solutions tailored to you.
            </p>
          </div>

          {/* Third Card */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center text-5xl text-purple-600 mb-4">
              <FaHandshake />
            </div>
            <h3 className="text-2xl font-bold mb-4">Partnership & Trust</h3>
            <p className="text-lg">
              We build lasting relationships based on trust and a commitment to long-term success for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WhyChooseUs;
