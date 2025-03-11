import React from 'react';
import { useLocation, useNavigate } from 'react-router';

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;
  const { name, image, price, additionalImageUrls, color } = product;

  if (!product) {
    return (
      <section className="min-h-[100dvh] grid place-content-center">
        <h2>Product not found.</h2>
        <button
          className="cursor-pointer rounded-md px-2 py-1 bg-slate-200 font-medium"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </section>
    );
  }

  return (
    <div className="grid md:grid-cols-2">
      <hgroup className="md:order-2 font-family-satoshi">
        <h3 className="font-bold text-[1.5rem] md:text-[2.5rem]">{name}</h3>
        <p>{price}</p>
        <p>Color: {color}</p>
      </hgroup>
      <figure className="md:order-1">
        <img src={image} alt={name} />
      </figure>
      {/* TODO: */}
      {/* Get additional images */}
    </div>
  );
}
