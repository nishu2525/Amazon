import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [userdata, setUserdata] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
  });
  console.log(userdata);

  const getData = (e) => {
    const { name, value } = e.target;
    setUserdata(()=>{
        return{
          ...userdata,
          [name]:value
        }
      })

  };
  return (
    <div className='w-full'>
      <div className='w-full bg-gray-100 h-screen '>
        <form className='w-[350px] mx-auto '>
          <Link to='/' className='cursor-pointer'>
            <img
              className='w-32 ml-28 pt-6'
              src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png'
              alt=''
            />
          </Link>
          <div className='w-full border border-zinc-200 p-6 '>
            <h2 className='font-titleFont text-3xl font-medium md-4 '>
              Sign up
            </h2>
            <div>
              <div className='pt-4 flex flex-col gap-2'>
                <label>Name</label>
                <input
                  onChange={getData}
                  type='text'
                  name='username' value={userdata.username}
                  placeholder='Your Full Name'
                  className='p-1 pl-2 mb-2'
                />
                <label>Email </label>
                <input
                  onChange={getData}
                  type='email'
                  name='email' value={userdata.email}
                  placeholder='Email'
                  className='p-1 pl-2 mb-2'
                />
                <label>Phone number</label>
                <input
                  onChange={getData}
                  type='number'
                  name='number' value={userdata.number}
                  placeholder='Your Phone Number'
                  className='p-1 pl-2 mb-2'
                />
                <label>Password</label>
                <input
                  onChange={getData}
                  type='password'
                  name='password' value={userdata.password}
                  placeholder='Set Password 6 atleast characters '
                  className='p-1 pl-2 mb-2'
                />
              </div>
              <button className='w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200'>
                Continue
              </button>
              <p className='text-xs text-black mt-2 ml-2'>
                By continuing, you agree to Amazon's{" "}
                <span className='text-sm text-blue-500'>Conditions of Use</span>{" "}
                and{" "}
                <span className='text-sm text-blue-500'>Privacy Notice.</span>
              </p>
            </div>
          </div>
          <p className='ml-12 mt-4'>----Already have an Account----</p>
          <Link to='/signin'>
            <button className='w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gray-200 border border-white-200 hover:border-yellow-700duration-200'>
              Login{" "}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
