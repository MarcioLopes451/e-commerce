import SHOPCO from "../../assets/desktop/SHOP.CO.png";
import CART from "../../assets/desktop/cart.png";
import ICON from "../../assets/desktop/icon.png";
import BURGER from "../../assets/mobile/burgerMenu.png"

import { Search } from "lucide-react"
import { ChevronDown } from "lucide-react";


import NavSearchbar from "./NavSearchbar";

function Navbar() {
  return (
    <div className="h-14 sm:h-24 flex justify-between sm:justify-center items-center gap-[40px] sm:py-16">
            <div className="flex gap-4 pl-4 sm:hidden">
                <img src={BURGER} alt="" />
                <img src={SHOPCO} alt="" />
            </div>
            <div className="flex gap-2 pr-4 sm:hidden">
                <Search />
                <img src={CART} alt="" />
                <img src={ICON} alt="" />
            </div>
            
            <div className="hidden sm:flex sm:visible">
                <img src={SHOPCO} alt="" />
            </div>
            <ul className="list-none gap-[28px] hidden sm:flex sm:visible">
                <li className="flex font-family-satoshi font-bold">
                    Shop
                    <span>
                        <ChevronDown strokeWidth={1.5} />
                    </span>
                </li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
            </ul>
            <div className="hidden sm:flex sm:visible">
                <NavSearchbar />
            </div>
            <div className="w-16 justify-between hidden sm:flex sm:visible">
                <img src={CART} alt="" />
                <img src={ICON} alt="" />
            </div>
    </div>
  );
}

export default Navbar;
