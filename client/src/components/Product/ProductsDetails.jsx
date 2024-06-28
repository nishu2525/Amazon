import axios from "axios";
import React, {  useState } from "react";
import { useParams } from "react-router-dom";

function ProductsDetails() {
  const { id } = useParams;
  const [product, setProduct] = useState({});
  console.log(id, "id", product, "product");



  const fetchProduct=async function productsData(){
    const products = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );
    setProduct(product)
    return products
}
fetchProduct();
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const data = await fetch(`https://fakestoreapi.com/products/${id}`);

  //     console.log(data);
  //     setProduct(data);
  //   };

  //   fetchProduct();
  // }, []);

  !Object.keys(product).length > 0 && <div>Product not Found</div>;
  return (
    <section className='text-gray-600 body-font overflow-hidden'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <img
            alt='ecommerce'
            className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
            src='https://dummyimage.com/400x400'
          />
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h2 className='text-sm title-font text-gray-500 tracking-widest'>
              Category
            </h2>
            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
              Title
            </h1>

            <p className='leading-relaxed'>
              {product.description}
            </p>

            <div className='flex'>
              <span className='title-font font-medium text-2xl text-gray-900'>
                ${product.price}
              </span>
              <button className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsDetails;
