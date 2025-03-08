import React from "react";

export default function ProductCard({ name, image, price }) {
  return (
    <section className="">
      <div className="flex flex-col items-start">
        <img
          src={image}
          alt="product image"
          className="w-[160px] h-[170px] rounded-[10px]"
        />
        <div>
          <h3 className="font-bold">{name}</h3>
          <p>{price}</p>
        </div>
      </div>
    </section>
  );
}
