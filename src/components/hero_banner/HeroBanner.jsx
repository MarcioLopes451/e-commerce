
import HeroImg from "./HeroImg"
import HeroText from "./HeroText"
function HeroBanner() {
  return (
    <div className="border-solid border-2 border-black flex">
        <HeroText />
        <HeroImg />        
    </div>
  )
}

export default HeroBanner