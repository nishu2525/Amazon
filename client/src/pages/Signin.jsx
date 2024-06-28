import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Signin() {
  const [logdata,setLogdata] =useState({
    email:"",
    password:""
  });
  console.log(logdata);
  const addData=(e)=>{
    const {name,value}=e.target
    
    setLogdata(()=>{
      return{
        ...logdata,
        [name]:value
      }
    })
  }
  return (
    <div className='w-full'>
    <div className='w-full bg-gray-100 h-screen'>
      <form className='w-[350px] mx-auto '>
        <Link to='/' className='cursor-pointer'><img className='w-32 ml-28 pt-8' src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" alt="" /></Link>
        <div className='w-full border border-zinc-200 p-6 '>
          <h2 className='font-titleFont text-3xl font-medium md-4 '>Sign in</h2>
          <div>
            <div className='pt-4 flex flex-col gap-2'>
          <label>Email or phone number</label>
          <input onChange={addData} value={logdata.email} type="email" name="email" placeholder='Email' className='p-1 pl-2 mb-2' />
          <label>Password</label>
          <input onChange={addData} value={logdata.password} type="password" name='password' placeholder='Password' className='p-1 pl-2 mb-2' />
            </div>
            <button className='w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200'>Continue</button>
         <p className='text-xs text-black mt-2 ml-2'>By continuing, you agree to Amazon's <span className='text-sm text-blue-500'>Conditions of Use</span> and <span className='text-sm text-blue-500'>Privacy Notice.</span></p>
          </div>
        </div>
        <p className='ml-16 mt-4'>----New To  Amazon?----</p>
        <Link to= '/signup' ><button className='w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gray-200 border border-white-200 hover:border-yellow-700duration-200'>Create Your Amazon account</button></Link>
      </form>
    </div>
    </div>
  )
}

export default Signin