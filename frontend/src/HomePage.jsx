import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import IngredientsSection from "./components/Ingredients/Ingredients"
import Product from "./components/Product/Product"
import Reviews from "./components/Reviews/Reviews"
import WhyChooseUs from "./components/whyChooseUs/whyChooseUs"


const HomePage = () => {
  return (
    <>
    <div className="overflow-hidden">
       <Hero/>
       <Features/>
       <Product/>
       <IngredientsSection/>
       <WhyChooseUs/>
       <Reviews/>
       <Footer/>
    </div>
    </>
  )
}

export default HomePage