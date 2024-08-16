'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
  const [isEmployeeHovered, setIsEmployeeHovered] = useState(false);
  const [isWorkerHovered, setIsWorkerHovered] = useState(false);
  const [isResourcesHovered, setIsResourcesHovered] = useState(false);
  const [isCountry, setIsCountry] = useState(false);

  return (
    <div className='container mx-auto flex justify-between items-center'>
      <div className='cursor-pointer'>
        <Image src="/Logo.svg" width={100} height={100} alt='' />
      </div>
      <div className='font-[600] text-[20px]'>
        <ul className='flex items-center gap-[40px] capitalize'>
          <li className=' hover:text-rose-500  duration-200 cursor-pointer'>About Us</li>
          <li
            onMouseEnter={() => setIsEmployeeHovered(true)}
            onMouseLeave={() => setIsEmployeeHovered(false)}
            className=' hover:text-rose-500  duration-200 flex gap-1  relative cursor-pointer'>
            <span>employers</span>
            <Image src="/Icon 1.svg" alt='' className='mt-2' width={20} height={16} />
            {isEmployeeHovered && (
              <div className="absolute left-0 top-6 mt-2 p-2 w-[200px]  bg-white text-black text-sm rounded shadow-lg z-10">
                <ul>
                  <li>Employee option</li>
                  <hr className="border-gray-400 border-t-1 w-[180px] my-2" />
                  <li>Employee option</li>
                  <hr className="border-gray-400 border-t-1 w-[180px] my-2" />
                  <li>Employee option</li>
                </ul>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setIsWorkerHovered(true)}
            onMouseLeave={() => setIsWorkerHovered(false)}
            className=' hover:text-rose-500 duration-200 flex gap-1 relative cursor-pointer'>
            <span>Find Worker</span>
            <Image src="/Icon 1.svg" alt='' className='mt-2' width={20} height={16} />
            {isWorkerHovered && (
              <div className="absolute left-0 top-6 mt-2 p-2 w-48 bg-white text-black text-sm rounded shadow-lg z-10">
                <ul>
                  <li>Worker option</li>
                  <hr className="border-gray-400 border-t-1 w-[180px] my-2" />
                  <li>Worker option</li>
                  <hr className="border-gray-400 border-t-1 w-[180px] my-2" />
                  <li>Worker option</li>
                </ul>
              </div>
            )}
          </li>
          <li className=' hover:text-rose-500 duration-200 cursor-pointer'>Industry</li>

          <li
            onMouseEnter={() => setIsResourcesHovered(true)}
            onMouseLeave={() => setIsResourcesHovered(false)}
            className=' hover:text-rose-500 duration-200 flex gap-1 relative cursor-pointer'>
            <span>Resources</span>
            <Image src="/Icon 1.svg" alt='' className='mt-2' width={20} height={16} />
            {isResourcesHovered && (
              <div className="absolute top-6 left-0 mt-2 p-2 w-48 bg-white text-black text-sm rounded shadow-lg z-10">
                <ul>
                  <li>Resource option</li>
                  <hr className="border-gray-400 border-t-1 w-[180px] my-2" />
                  <li>Resource  option</li>
                  <hr className="border-gray-400 border-t-1 w-[180px] my-2" />
                  <li>Resource  option</li>
                </ul>
              </div>
            )}
          </li>
          <li className='px-4 py-3 bg-[#004785] rounded cursor-pointer text-white hover:bg-rose-500 duration-300'>Contact Us</li>

          <li onMouseEnter={() => setIsCountry(true)}
            onMouseLeave={() => setIsCountry(false)}
            className='flex gap-1 items-center relative cursor-pointer '>
            <Image src="/Country Icon.svg" alt='' width={30} height={30} />
            <Image src="/Icon 1.svg" alt='' className='mt-2' width={20} height={16} />
            {isCountry && (
              <div className="absolute top-6 left-0 mt-2 p-2 w-48 bg-white text-black text-sm rounded shadow-lg z-10">
                <ul>
                  <li>English</li>
                  <hr className="border-gray-400 border-t-1 w-[180px] my-2" />
                  <li>Bangla</li>
                </ul>
              </div>
            )}
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar