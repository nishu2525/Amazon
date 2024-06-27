import React from "react";
import { useLoaderData } from "react-router-dom";
import GradeIcon from "@mui/icons-material/Grade";
function Products() {
  const data = useLoaderData();
  const productData = data.data;
  return (
    <div className='max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4'>
      {productData.map((item) => (
        <div
          key={item.id}
          className='bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4'
        >
          <div className='w-full h-auto flex justify-center items-center'>
            <img className='w-52 h-64 object-contain' src={item.image} alt='' />
          </div>
          <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">{item.category}</span>
          <div className='px-4'>
            <div className='flex items-center justify-between'>
              <h2 className='font-titleFont tracking-wide text-lg text-amazon_blue font-medium'>
                {item.title.substring(0, 20)}
              </h2>
              <p className='text-sm text-gray-600 font-semibold'>
                ${item.price}
              </p>
            </div>
            <div>
              <p className='text-sm'>{item.description.substring(0, 100)}</p>...
            </div>
            <div className='text-yellow-500 mb-1 '>
              <GradeIcon />
              <GradeIcon />
              <GradeIcon />
              <GradeIcon />
            </div>
            <button className='w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200'>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
