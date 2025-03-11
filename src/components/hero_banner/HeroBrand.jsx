import CK from "../../assets/desktop/ck.png"
import ZARA from "../../assets/desktop/zara.png"
import PRADA from "../../assets/desktop/prada.png"
import GUCCI from "../../assets/desktop/gucci.png"
import VERSACE from "../../assets/desktop/versace.png"
function HeroBrand() {
  return (
    <div className='py-4 bg-black flex flex-wrap justify-center gap-2 sm:h-36 sm:items-center sm:justify-evenly'>
        <img src={VERSACE} className="w-28 h-6 m-2 sm:w-48 sm:h-10" />
        <img src={ZARA} className="w-16 h-6 m-2 sm:w-24 sm:h-10" />
        <img src={GUCCI} className="w-24 h-6 m-2 sm:w-40 sm:h-10" />
        <img src={PRADA} className="w-28 h-6 m-2 sm:w-48 sm:h-10" />
        <img src={CK} className="w-32 h-6 m-2 sm:w-64 sm:h-10"/>
    </div>
  )
}

export default HeroBrand