import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import IngredientsSection from "./components/Ingredients/Ingredients"
import Reviews from "./components/Reviews/Reviews"
import WhyChooseUs from "./components/whyChooseUs/whyChooseUs"


const HomePage = () => {
  return (
    <>
       
       <Hero/>
       <Features/>
       <IngredientsSection/>
       <WhyChooseUs/>
       <Reviews/>
       <Footer/>
    </>
  )
}

export default HomePage