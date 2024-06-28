import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import { productsData } from './api/api';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ProductsDetails from './components/Product/ProductsDetails';
const Layout =()=>{
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} loader={productsData} />
          <Route path='/productdetails/:id' element={<ProductsDetails/>}/>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

      </>
    )
  );
  return (
    <div className="font-bodyFont  bg-gray-200">
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
