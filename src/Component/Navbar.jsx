'use client'
import React, { useState } from 'react'
import { IoGlobeOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from 'next/image';
import { NavbarQcsLogo } from '@/AllAssets/AllAsssets';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {/* navbar */}

      <nav className="w-[90%] mx-auto flex justify-between items-center py-4 ">
        <Link href="/">
          
          <Image src={NavbarQcsLogo} alt="logo" width={194.82} height={40} className='w-full h-full' />
        </Link>

        <div className={`hidden md:flex space-x-11 text-[17px] font-montserrat`}>
          <Link href="/service" className="hover:text-gray-400">Service</Link>
          <Link href="/product" className="hover:text-gray-400">product</Link>
          <Link href="/aboutus" className="hover:text-gray-400">About Us</Link>
          <Link href="/blogs" className="hover:text-gray-400">Blogs</Link>
          <Link href="/contactus" className="hover:text-gray-400">Contact Us</Link>
        </div>


        <div className="flex items-center md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className=" w-6 h-6" /> : <HiMenu className=" w-6 h-6" />}
          </button>
        </div>


        <div className={`hidden md:flex items-center space-x-4 gap-2 font-montserrat`}>
          
          
          <Link href='/contactus' >
            <button className="border  px-[4rem] py-1 rounded-md bg-[#fff] text-[#000] hover:bg-white/50 transition-all ease-in-out duration-150 hover:text-white cursor-pointer " >
              Get a Quote
            </button>
          </Link>
        </div>
      </nav>

      {/* responsive navbar */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black py-4 space-y-4 ">
          <Link href="/service">Service</Link>
          <Link href="/product">product</Link>
          <Link href="service/#aboutus">About Us</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/service/contactus">Contact Us</Link>
          <div className="flex items-center">
            <IoGlobeOutline className="w-5 h-5 me-1" /> En
          </div>
          <button className="border border-white px-4 py-1 rounded-md hover:bg-white hover:text-black">
            Get a Quote
          </button>
        </div>
      )}
      
    </>
  );
};

export default Navbar;


