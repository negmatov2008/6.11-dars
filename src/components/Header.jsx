import React from "react";

function Header() {
  return (
    <header className="bg-[url(https://react-shop-siza.vercel.app/assets/AbstractDesign-5_Gpi5_9.svg)] sticky top-0 bg-[#141414] border-b border-b-stone-800   text-[#FFFFFF] object-cover bg-contain bg-right-bottom px-16 py-6">
      <div className="container mx-auto ">
        <div className="flex justify-between ">
          <h2 className="text-5xl font-simebold ">React Shop</h2>
          <div className="flex gap-6 items-center">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary border border-blue-800 text-white bg-blue-700">
                0
              </span>
              <div className="btn btn-md bg-inherit border border-stone-800">
                <img
                  className="w-[26px] h-[28px] bg-inherit"
                  src="/icon.png"
                  alt=""
                />
              </div>
            </div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                Click
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div>
              <img
                className="w-[26px] h-[28px] bg-inherit "
                src="/icon.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
