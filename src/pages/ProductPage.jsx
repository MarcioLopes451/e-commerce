import React, { useState, useEffect } from "react";
import ProductCard from "../components/products/ProductCard";
import filterImg from "../assets/mobile/5957020_filter_sort_icon.png";
import Filter from "../components/filter/Filter";
import BackDrop from "../components/backdrop/BackDrop";

const url =
  "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=7616&country=US&sort=freshness&currency=USD&sizeSchema=US&limit=48&lang=en-US";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7aaf7a79demsh2835010c2347247p12fdd5jsn0d2b76ba88f2",
    "x-rapidapi-host": "asos2.p.rapidapi.com",
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
    <section className="relative">
      <div className="flex justify-between items-center px-[16px]">
        <div>
          <h1 className="text-[24px] font-bold">T-Shirts</h1>
          <p className="text-[14px]">
            Showing {firstIndex + 1}-{Math.min(lastIndex, data.length)} out of{" "}
            {data.length} products
          </p>
        </div>
        <img
          src={filterImg}
          onClick={handleOpen}
          className="w-[25px] h-[25px] rounded-[50px] bg-[#F0F0F0]"
        />
      </div>
      <div className="mt-10 flex flex-row flex-wrap items-center justify-between px-[16px]">
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
      <section>{open && <Filter onclose={handleOpen} />}</section>
      <section>{open && <BackDrop onclose={handleOpen} />}</section>
    </section>
  );
}
