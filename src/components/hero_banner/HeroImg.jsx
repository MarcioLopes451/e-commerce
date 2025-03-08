import HERO from "../../assets/mobile/heroMobile.png"
import VECTOR from "../../assets/desktop/Vector.png"
function HeroImg() {
  return (
    <div className="relative">
        <img src={VECTOR} alt="" className="absolute right-4 top-8"/>
        <img src={VECTOR} alt="" className="absolute w-16 top-36 left-4"/>
        <img src={HERO} alt="" className=""/>
    </div>
  )
}

export default HeroImg