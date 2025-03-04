import BANNERTEXT from "../../assets/mobile/bannerText.png"

function HeroText() {
  return (
    <div className="w-full flex flex-col gap-4 px-4 pt-8 bg-[#F0F0F0]">
        <div className="">
            <img src={BANNERTEXT}  alt="" />
        </div>
        <div className="Satoshi text-[12px] text-[400]">
            <span className="text-[rgba(0,0,0,0.6)]">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </span>
        </div>
        <button className="w-full rounded-full p-3 bg-black text-white Satoshi">
            <span className="font-semibold">
                Shop Now
            </span>
        </button>
        <div className="flex justify-center items-center flex-col Satoshi gap-2 text-[#00000099]">
            <div className="w-full text-[12px] flex gap-4">
                <div><span className="font-bold text-[16px] text-black">200+</span> <br /> international brands</div>
                <span className="border-l-2 border-[#0000001A]"></span>
                <div><span className="font-bold text-[16px] text-black">2,000+</span> <br />  High-Quality Products</div>
            </div>
            <div className="text-[12px]">
                <span className="font-bold text-[16px] text-black">30,000+</span> <br /> Happy Customers
            </div>
        </div>
    </div>
  )
}

export default HeroText