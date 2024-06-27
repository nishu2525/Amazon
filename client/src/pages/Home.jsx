import React from 'react'
import Banner from '../components/Carosule/Banner';
import Products from '../components/Product/Products'
function Home() {
  return (
    <div>
      <Banner/>
      <div className='w-full -mt-36'>
      <Products/>
      </div>
  
    </div>
  )
}

export default Home