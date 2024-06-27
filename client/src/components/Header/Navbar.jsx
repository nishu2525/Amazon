import React, { useState } from "react";
import { logo } from "../../assets/index";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { allItems } from "../../constants";
import HeaderBottom from "./HeaderBottom";

function Navbar() {
  const [showAll, setShowAll] = useState(false);

  //   const allItems =[
  //     {_id:101 , title :"All Departments"},
  //     {_id: 102, title: "Automotive"},
  //       {_id: 103, title: "Baby"},
  //       {_id: 104, title: "Beauty & Personal Care"},
  //       { _id: 105, title: "Books" },
  //       {_id: 106, title: "Boys' Fashion" },
  //       {_id: 107, title: "Computers" },
  //       {_id: 108, title: "Deals" },
  //       {_id: 109, title: "Digital Music" },
  //       {_id: 110, title: "Electronics" },
  //       {_id: 111, title: "Girls Fashion"},
  //       {id: 112, title: "Health & Household"} ,
  // {_id: 113, title: "Home & Kitchen"},
  // {_id: 114, title: "Industrial & Scientific"},
  // {_id: 115, title: "Kindle Store"},
  // {_id: 116, title: "Luggage"},
  // {_id: 117, title: "Men's Fashion" },
  // {_id: 118, title: "Movies & TV"},
  // {_id: 119, title: "Music, CDs & Vinyl"},
  // {_id: 120, title: "Pet Supplies" },
  // {_id: 121, title: "Prime Video" },
  // {_id: 122, title: "Software" },
  // {_id: 123, title: "Sports & Outdoors" },
  // {_id: 124, title: "Tools & Home Improvement" },
  // {_id: 125, title: "Toys & Games" },
  // {_id: 126, title: "Video Games" },
  // {_id: 127, title: "Women's Fashion"},
  // ]
  return (
    <div className="w-full">
      <div className=' bg-amazon_blue text-white px-4  flex items-center gap-4'>
        <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
          <img src={logo} alt='logo' className='w-24 mt-2' />
        </div>
        <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
          <LocationOnIcon />
          <p className='text-sm text-lightText font-light flex flex-col'>
            Deliver to{" "}
            <span className='text-sm font-semibold  text-whiteText'>Pune</span>
          </p>
        </div>
        <div className='h-10 rounded-md flex flex-grow relative'>
          <span
            onClick={() => setShowAll(!showAll)}
            className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-point duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'
          >
            All <span></span> <ArrowDropDownIcon />{" "}
          </span>
          {showAll && (
            <div>
              <ul className='bg-gray-200 absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hiddenbg-white border-[1px) ☐ border-amazon_blue ☐ text-black p-2 flex-col gap-1 2-50'>
                {allItems.map((item) => (
                  <li
                    className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-300 bg-gray-200 p-1'
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            type='text'
            className='h-full text-base text-amazon_blue outline-none border-none px-2 w-5/6'
          />
          <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
            <SearchIcon />{" "}
          </span>
        </div>
        <div className='flex flex-col justify-center h-[80%]   border border-transparent px-2  hover:border-white cursor-pointer duration-100'>
          <p className='text-xs text-lightText font-light'>Hello Sign in</p>
          <p className='text-sm font-semibold -mt-1 text-whiteText'>
            Accounts & List{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
          </p>
        </div>
        <div className='flex flex-col justify-center h-[80%]   border border-transparent px-2  hover:border-white cursor-pointer duration-100'>
          <p className='text-xs text-lightText font-light'>Hello Sign in</p>
          <p className='text-sm font-semibold -mt-1 text-whiteText'>
            Accounts & List{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
          </p>
        </div>
        <div className='flex flex-col justify-center h-[80%]   border border-transparent px-2 mt-2 hover:border-white cursor-pointer duration-100'>
            <ShoppingCartIcon />
            <p className="text-sm font-semibol  text-whiteText">Cart <span className="text-xs relative -top-12 left-4 font-semibold p-1 h-4 w-3 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">0</span></p>
        </div>
      </div>
      <HeaderBottom/>
    </div>
  );
}

export default Navbar;
