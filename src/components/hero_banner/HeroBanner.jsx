
import HeroImg from "./HeroImg"
import HeroText from "./HeroText"
import HeroBrand from "./HeroBrand"

function HeroBanner() {
  return (
    <div className="bg-[#F2F0F1] h-fit">
        <HeroText />
        <HeroImg />        
        <HeroBrand />
    </div>
  )
}

export default HeroBanner