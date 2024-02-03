import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Outlet, Link } from "react-router-dom";
import Card from "../components/Cars";
import { getApi, getCategore, getSingleCategore } from "../api/Api";

function Home() {
  const [product, setProduct] = useState();
  const [categorey, setCategory] = useState();
  const [idApi, setIdApi] = useState();

  const getProduct = async () => {
    const productApi = await getApi();
    setProduct(productApi);
  };
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    getCategorey();
  }, []);
  const getCategorey = async () => {
    const categorey = await getCategore();
    setCategory(categorey);
  };
  const getCategoriesProduct = async (id) => {
    const singleProduct = await getSingleCategore(id);
    setProduct(singleProduct);
    console.log(singleProduct);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-8 px-32 flex flex-col gap-8">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs"
        />
        <div className="grid grid-cols-[3fr_1fr] gap-6 text-white">
          <div className="flex flex-wrap gap-6 justify-center ">
            {product ? (
              product.map((p) => (
                <Card
                  key={p.id}
                  title={p.title}
                  description={p.description}
                  price={p.price}
                  category={p.category.name}
                  images={p.images}
                  id={p.id}
                />
              ))
            ) : (
              <div className="flex justify-center items-center mt-[20%]">
                <span className="loading loading-lg loading-spinner text-neutral"></span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 pt-4 border border-stone-800 rounded-lg max-h-[550px]">
            <h1 className="text-2xl font-bold pl-6">Categoreis :</h1>
            <span
              onClick={() => {
                getProduct();
              }}
              className="p-2 bg-neutral-900 cursor-pointer text-xl font-simebold"
            >
              All
            </span>
            {categorey &&
              categorey.map((c) => (
                <span
                  key={c.id}
                  onClick={() => {
                    getCategoriesProduct(c.id);
                  }}
                  className="p-2 bg-neutral-900 cursor-pointer text-xl font-simebold"
                >
                  {c.name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
