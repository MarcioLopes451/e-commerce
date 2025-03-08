import BANNERTEXT from "../../assets/mobile/bannerText.png"

function HeroText() {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-8 px-4 pt-8 bg-[#F2F0F1] sm:p-28 sm:h-3/4 sm:w-3/5 sm:absolute sm:z-10 sm:left-30 sm:bg-transparent">
        <div className="md:h-4/5">
            <img src={BANNERTEXT}  alt="" className="bg-cover h-full"/>
        </div>
        <div className="Satoshi text-[12px] text-[400]">
            <span className="text-[rgba(0,0,0,0.6)] sm:text-[16px]">
                Browse through our diverse range of meticulously crafted garments, designed <br className="hidden sm:flex sm:visible" /> to bring out your individuality and cater to your sense of style.
            </span>
        </div>
        <button className="w-full rounded-full p-3 bg-black text-white Satoshi sm:w-2/10">
            <span className="font-semibold">
                Shop Now
            </span>
        </button>
        <div className="flex justify-center items-center flex-col Satoshi gap-2 text-[#00000099]">
            <div className="w-full text-[12px] flex gap-4 sm:gap-6">
                <div className="sm:text-[16px]"><span className="font-bold text-[16px] text-black sm:text-[36px]" >200+</span> <br /> international brands</div>
                <span className="border-l-2 border-[#0000001A]"></span>
                <div className="sm:text-[16px]"><span className="font-bold text-[16px] text-black sm:text-[36px]">2,000+</span> <br />  High-Quality Products</div>
                <span className="border-l-2 border-[#0000001A] hidden sm:visible sm:flex"></span>
                <div className="sm:text-[16px] hidden md:visible md:flex md:flex-col">
                    <span className="font-bold text-[16px] text-black sm:text-[36px]">30,000+</span> <br /> Happy Customers
                </div>
            </div>
            <div className="text-[12px] md:hidden">
                <span className="font-bold text-[16px] text-black">30,000+</span> <br /> Happy Customers
            </div>
        </div>
    </div>
  )
}

export default HeroText