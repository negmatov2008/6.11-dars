import React from "react";

function Header() {
  return (
    <header className="bg-[url(https://react-shop-siza.vercel.app/assets/AbstractDesign-5_Gpi5_9.svg)] sticky top-0 bg-[#141414] border-b border-b-stone-800   text-[#FFFFFF] object-cover bg-contain bg-right-bottom px-16 py-6">
      <div className="container mx-auto ">
        <div className="flex justify-between ">
          <h2 className="text-5xl font-simebold ">React Shop</h2>
          <div className="flex gap-6">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary border border-blue-800 text-white bg-blue-700">0</span>
              <div className="btn btn-md bg-inherit border border-stone-800"><img  className="w-[26px] h-[28px] bg-inherit" src="/icon.png" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
