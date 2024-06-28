import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
function HeaderBottom() {
    
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className='bg-amazon_light w-full px-4 h-[3rem] text-white flex items-center'>
      <ul className='flex gap-2 text-sm tracking-wide items-center '>
        <li
          onClick={() => setSidebar(true)}
          className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'
        >
          <span className='flex gap-1 items-center'>
            <MenuIcon />
            All
          </span>{" "}
        </li>
        <li className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'>
          Sell
        </li>
        <li className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'>
          Best Sellers
        </li>
        <li className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'>
          Mobiles
        </li>
        <li className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'>
          Baby Care
        </li>
        <li className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'>
          Fashion
        </li>
        <li className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'>
          Electronics
        </li>
        <li className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'>
          Gift Ideas
        </li>
        <li className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'>
          New Realse
        </li>
        <li className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'>
          Home and Kitchen
        </li>
        <li className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'>
          Books{" "}
        </li>
        <li className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'>
          Computer
        </li>
        <li className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'>
          Car-bike assce.
        </li>
        <li className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'>
          Sports,Fitness
        </li>
      </ul>
      {sidebar && (
        <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
          <div className='w-full h-full relative'>
            <div className='w-[16rem] h-full bg-white border border-black'>
              <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-3'>
                <AccountCircleIcon />
                <h3 className='font-titleFont font-bold text-lg tracking-wide'>
                  Hello, Sigin
                </h3>
              </div>

              <div className='pl-3 border-b-2 py-2'>
                <h3 className='text-lg font-titleFont font-semibold mb-1 pl-3'>
                  Trending
                </h3>
                <ul className='pl-4 text-sm flex flex-col gap-2 '>
                  <li>Best Sellers</li>
                  <li>New Releases</li>
                  <li>Movers and Shakers</li>
                </ul>
              </div>
              <div className='pl-3 border-b-2 py-2'>
                <h3 className='text-lg font-titleFont font-semibold mb-1 pl-3'>
                  Digital Content and Devices
                </h3>
                <ul className='pl-4 text-sm flex flex-col gap-2 '>
                  <li>Echo & Alexa</li>
                  <li>Fire TV</li>
                  <li>Kindle E-Readers & eBooks</li>
                  <li>Audible Audiobooks</li>
                  <li>Amazon Prime Video</li>
                  <li>Amazon Prime Music</li>
                </ul>
              </div>
              <div className='pl-3 border-b-2 py-2'>
                <h3 className='text-lg font-titleFont font-semibold mb-1 pl-3'>
                  Shop by Category
                </h3>
                <ul className='pl-4 text-sm flex flex-col gap-2 '>
                  <li>Mobiles, Computers</li> 
                  <li> TV, Appliances, Electronics</li>
                  <li>Men's Fashion</li>
                  <li>Women's Fashion</li>
                </ul>
              </div>
              <div className="pl-3 border-b-2">
                <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">Programs & Features</h3>
              <ul className='pl-4 text-sm flex flex-col gap-2 '>
                <li>Amazon Pay</li>
               <li>Amazon Pay</li>
               <li>Birthday Gift Cards</li>
              </ul>
              </div>
              <div className='pl-3 border-b-2 py-2'>
                <h3 className='text-lg font-titleFont font-semibold mb-1 pl-3'>
                  Shop by Category
                </h3>
                <ul className='pl-4 text-sm flex flex-col gap-2 '>
                  <li>Mobiles, Computers</li> 
                  <li> TV, Appliances, Electronics</li>
                  <li>Men's Fashion</li>
                  <li>Women's Fashion</li>
                </ul>
              </div>
            </div>
          <span onClick={()=>setSidebar(false)} className="cursor-pointer absolute top-0 left-[16rem] w-10 h-11 flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover: text-white duration-300"><CloseIcon/></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderBottom;
