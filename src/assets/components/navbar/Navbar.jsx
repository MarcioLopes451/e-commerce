import SHOPCO from "../../desktop/SHOP.CO.png"
import CART from "../../desktop/cart.png"
import ICON from "../../desktop/icon.png"
import { ChevronDown } from "lucide-react"

import NavSearchbar from "./NavSearchbar"
function Navbar() {
  return (
    <div className="flex justify-center items-center gap-[40px] h-24">
        <div><img src={SHOPCO} alt="" /></div>
        <ul className="flex list-none gap-[24px]">
            <li className="flex">
                Shop 
                <span><ChevronDown strokeWidth={1.5} /></span>
                </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
        </ul>
        <NavSearchbar />
        <div className="flex w-16 justify-between">
            <img src={CART} alt="" />
            <img src={ICON} alt="" />
        </div>
    </div>
  )
}

export default Navbar