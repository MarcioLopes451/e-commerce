import React from "react";

export default function Filter() {
  return (
    <section className="absolute top-10 w-[90%]">
      <div className="bg-blue-200 px-5">
        <div className="flex justify-between">
          <h2>Filters</h2>
          <p>close</p>
        </div>
        <div className="border border-gray-200 mt-3" />
        <div className="mt-5">
          <p>t-shirts</p>
          <p>shirts</p>
          <p>jeans</p>
          <p>jackets</p>
          <p>accessories</p>
        </div>
      </div>
    </section>
  );
}
