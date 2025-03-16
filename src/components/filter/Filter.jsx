import React from "react";
import ExitIcon from "../../assets/mobile/10758949_x_icon.png";

export default function Filter({ onclose }) {
  return (
    <section className="fixed top-[400px] w-full z-50">
      <div className="bg-white px-5 rounded-t-[10px] pb-10">
        <div className="flex justify-between items-center pt-3">
          <h2 className="font-bold">Filters</h2>
          <img src={ExitIcon} onClick={onclose} className="w-[24px]" />
        </div>
        <div className="border border-gray-200 mt-3" />
        <div className="mt-5 flex flex-col gap-4 font-light text-[#7a7a7a]">
          <p>t-shirts</p>
          <p>shirts</p>
          <p>jeans</p>
          <p>jackets</p>
          <p>accessories</p>
        </div>
        <div className="border border-gray-200 mt-3" />
        <div className="flex justify-center items-center mt-5">
          <button className="w-[350px] h-[40px] bg-black text-white font-light rounded-[20px]">
            Apply Filter
          </button>
        </div>
      </div>
    </section>
  );
}
