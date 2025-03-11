import Ad from "../components/ad/Ad"
import HeroBanner from "../components/hero_banner/HeroBanner"
import Navbar from "../components/navbar/Navbar"

function Home() {
  return (
    <div className="font-satoshi w-screen">
        <Ad />
        <Navbar />
        <HeroBanner />
    </div>
  )
}

export default Home