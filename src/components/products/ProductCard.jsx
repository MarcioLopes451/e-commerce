import React from 'react';
import { Link } from 'react-router';

export default function ProductCard({
  name,
  image,
  price,
  additionalImageUrls,
  color,
}) {
  const productDetails = { name, image, price, additionalImageUrls, color };
  return (
    <section className="">
      <div className="flex flex-col items-start relative isolate focus-within:outline outline-[-webkit-focus-ring-color] rounded-[10px] outline-offset-[.3rem]">
        <img
          src={image}
          alt="product image"
          className="w-[160px] h-[170px] rounded-[10px]"
        />
        <div>
          <h3 className="font-bold">
            <Link
              tabIndex={0}
              to={`/${name}`}
              state={productDetails}
              className="outline-none"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-red-100/20"
              ></span>
              {name}
            </Link>
          </h3>
          <p>{price}</p>
        </div>
      </div>
    </section>
  );
}
