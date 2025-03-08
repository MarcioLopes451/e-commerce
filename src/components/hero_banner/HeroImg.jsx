import HEROMOBILE from "../../assets/mobile/heroMobile.png"
import HERODESKTOP from "../../assets/desktop/hero.png"
import VECTOR from "../../assets/desktop/Vector.png"
function HeroImg() {
  return (
    <div className="relative sm:h-fit sm:flex sm:justify-end">
        <img src={VECTOR} alt="" className="absolute right-4 top-8 sm:right-20 sm:top-20"/>
        <img src={VECTOR} alt="" className="absolute w-16 top-36 left-4 sm:top-1/3 sm:left-auto sm:right-2/6"/>
        <img src={HEROMOBILE} alt="" className="visible sm:hidden"/>
        <img src={HERODESKTOP} alt="" className="sm:bg-cover sm:h-3/4 hidden sm:visible sm:flex"/>
    </div>
  )
}

export default HeroImg