import React from "react";

import { Outlet, Link } from "react-router-dom";

function Card({ id, title, description, price, category, images }) {
  return (
    <div className="p-6 border border-stone-800 rounded-lg w-[350px]">
      <img className="h-[298px] rounded-md mb-4" src={images[0]} alt={title} />
      <h3 className="text-xl mb-1 h-[50px]">{title}</h3>
      <div className="flex items-center gap-1 mb-4">
        <p className="truncate text-slate-500 ">{description}</p>
        <Link to={"product/" + id} className="btn btn-link">
          More
        </Link>
      </div>
      <div className="p-1 mb-4 rounded-2xl text-[14px] inline-block text-stone-300 bg-slate-700">
        {category}
      </div>
      <div className="flex justify-between items-center">
        <span className="font-simebold text-xl">$ {price}</span>
        <button className="btn btn-primary btn-active text-inherit bg-blue-800 border border-blue-800">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
