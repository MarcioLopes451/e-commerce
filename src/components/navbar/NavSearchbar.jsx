import { Search } from "lucide-react"
import { getDimension } from "../../lib/util"

function NavSearchbar() {
    return (
      <div className="w-[650px] h-[48px] flex items-center bg-[#F0F0F0] rounded-full px-4 gap-3">
          <Search color="gray"/>
          <input className=" w-full h-full outline-none" placeholder="Search for products..."/>
      </div>
    )
}

export default NavSearchbar