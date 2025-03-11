<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import ProductCard from "../components/products/ProductCard";
import filterImg from "../mobile/5957020_filter_sort_icon.png";
import Filter from "../components/filter/Filter";
=======
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/products/ProductCard';
>>>>>>> 13b4e9325e22aaa1de2a4025cf60db4ecaa23951

const url =
  'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=7616&country=US&sort=freshness&currency=USD&sizeSchema=US&limit=48&lang=en-US';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '7aaf7a79demsh2835010c2347247p12fdd5jsn0d2b76ba88f2',
    'x-rapidapi-host': 'asos2.p.rapidapi.com',
  },
};

export default function ProductPage() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const parseData = await fetch(url, options);
        const jsonData = await parseData.json();
        setData(jsonData.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  // console.log(data);

  const lastIndex = page * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const sliceItems = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrev = () => {
    if (page >= 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <section className="px-[16px] relative">
      <div className="flex justify-between">
        <h1>Shirts and Vests</h1>
        <img src={filterImg} onClick={handleOpen} />
      </div>
      <div className="mt-10 flex flex-row flex-wrap items-center justify-between">
        {sliceItems.map((item) => (
          <ProductCard
            key={item.id}
            image={`https://${item.imageUrl}`}
            name={
              item.name.length >= 15
                ? `${item.name.slice(0, 15)}...`
                : item.name
            }
            price={item.price.current.text}
            additionalImageUrls={item.additionalImageUrls}
            color={item.colour}
          />
        ))}
      </div>
      <section className="mt-10 pb-10">
        <div className="w-full flex justify-between">
          <button
            className="w-[90px] h-[30px] border border-gray-300 rounded-[10px]"
            onClick={handlePrev}
            disabled={page === 1}
          >
            Prev
          </button>
          <div>
            <h2>Page {page}</h2>
          </div>
          <button
            className="w-[90px] h-[30px] border border-gray-300 rounded-[10px]"
            onClick={handleNext}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </section>
      <section>{open && <Filter />}</section>
    </section>
  );
}
