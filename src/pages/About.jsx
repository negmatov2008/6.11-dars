import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { getSingleProduct } from "../api/Api";
import { Link } from "react-router-dom";

function About() {
  const [product, setProduct] = useState();
  const getApi = async () => {
    const nat = await getSingleProduct();
    console.log(nat);
    setProduct(nat);
  };
  getApi();
  console.log(product);
  return (
    <div>
      <Header />
      {product ? (
        <div className="px-12 pt-2 pb-6 max-w-[80%] mx-auto mt-6 rounded-lg border border-stone-800 bg-[#1A1A1A]">
          <Link to={"/"}>
            <button className="btn  rounded-3xl ml-[87%] mb-8 px-6">{`< back`}</button>
          </Link>
          <div className="flex gap-16">
            <div className="flex gap-10 items-center">
              <div className="flex flex-col gap-12">
                {product &&
                  product.images.map((img) => (
                    <img className="rounded-lg max-h-[80px]" src={img} alt="" />
                  ))}
              </div>
              <img
                className="max-h-[440px] rounded-lg"
                src={product && product.images[0]}
                alt=""
              />
            </div>
            <div className="flex flex-col w-[40%] text-white">
              <h3 className="text-3xl font-bold mb-4 h-[50px]">
                {product && product.title}
              </h3>
              <div className="flex items-center gap-1 mb-14">
                <p className=" text-slate-500  text-lg">
                  {product && product.description}
                </p>
              </div>
              <div className="p-1 mb-10 rounded-2xl text-[24px] font-simebold  max-w-[100px] text-center text-stone-300 bg-slate-700">
                {product && product.category.name}
              </div>
              <div className="flex justify-between  items-center">
                <span className="font-simebold text-xl">
                  $ {product && product.price}
                </span>
                <button className="btn btn-primary btn-active text-inherit bg-blue-800 border border-blue-800">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-[20%]">
          <span className="loading loading-lg loading-spinner text-neutral"></span>
        </div>
      )}
    </div>
  );
}

export default About;
