import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full flex justify-around items-center'>
      <h1 className='w-50%'>EWebsite </h1>
      <div className='w-50% flex justify-between h-20 bg-red-500 items-center'>
        <p>Service</p>
        <p>Products</p>
        <p>About us</p>
      </div>
    </div>
  )

}
