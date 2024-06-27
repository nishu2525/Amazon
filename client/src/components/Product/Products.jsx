import React from 'react'
import { useLoaderData } from 'react-router-dom'

import axios from 'axios'
function Products() {
    const data = useLoaderData()
    const productData = data.data;
  return (
    <div>
      Products
    </div>
  )
}

export default Products