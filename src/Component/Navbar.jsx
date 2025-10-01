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

      <nav className="mx-auto flex w-[90%]  items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
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
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
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
        <div className="md:hidden flex flex-col items-center space-y-4 bg-gray-900 py-6 text-white">
          <Link href="/service">Service</Link>
          <Link href="/product">product</Link>
          <Link href="/service#aboutus">About Us</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contactus">Contact Us</Link>
          <div className="flex items-center">
            <IoGlobeOutline className="me-1 h-5 w-5" /> En
          </div>
          <Link
            href="/contactus"
            className="rounded-md border border-white px-5 py-2 font-montserrat transition hover:bg-white hover:text-gray-900"
          >
            Get a Quote
          </Link>
        </div>
      )}
      
    </>
  );
};

export default Navbar;


