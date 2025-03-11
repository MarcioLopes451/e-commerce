import Ad from "../components/ad/Ad"
import HeroBanner from "../components/hero_banner/HeroBanner"
import Navbar from "../components/navbar/Navbar"
import ProductSample from "../components/sample/ProductSample"
import Divider from "../components/divider/Divider"
import { new_arrivals } from "../components/sample/Sample"
import { top_selling } from "../components/sample/Sample"

function Home() {
    return (
        <div className="font-satoshi w-screen">
            <Ad />
            <Navbar />
            <HeroBanner />
            <ProductSample content={"NEW ARRIVALS"} products={new_arrivals}/>

            <Divider />

            <ProductSample content={"TOP SELLING"} products={top_selling}/>

            
        </div>
  )
}

export default Home