'use client'
import React, { useEffect, useState } from 'react'
import { IoGlobeOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from 'next/image';
import { NavbarQcsLogo } from '@/AllAssets/AllAsssets';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationLinks = [
    { href: '/service', label: 'Service' },
    { href: '/product', label: 'Product' },
    { href: '/service#aboutus', label: 'About Us' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contactus', label: 'Contact Us' },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {/* navbar */}

      <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex-shrink-0" onClick={handleLinkClick}>
            <Image
              src={NavbarQcsLogo}
              alt="QCSS Logo"
              width={195}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 text-base font-montserrat md:flex lg:gap-10">
            {navigationLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="transition-colors duration-150 hover:text-gray-300">
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 font-montserrat md:flex">
            <button className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white transition hover:border-white hover:bg-white/10">
              <IoGlobeOutline className="h-5 w-5" /> En
            </button>
            <Link href="/contactus" className="inline-flex">
              <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black transition hover:bg-white/80">
                Get a Quote
              </button>
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full border border-white/30 p-2 text-white transition hover:border-white hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* responsive navbar */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-black/80 backdrop-blur-sm md:hidden">
          <div className="flex h-full flex-col justify-between px-6 py-8 sm:px-10">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={handleLinkClick} className="flex-shrink-0">
                <Image
                  src={NavbarQcsLogo}
                  alt="QCSS Logo"
                  width={150}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-white/40 p-2 text-white transition hover:border-white hover:bg-white/10"
                aria-label="Close navigation menu"
              >
                <HiX className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-12 flex flex-1 flex-col justify-between text-center text-lg font-montserrat">
              <div className="space-y-6">
                {navigationLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={handleLinkClick}
                    className="block rounded-full px-4 py-2 transition hover:bg-white/10"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <div className="mt-10 space-y-6">
                <button className="flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-4 py-2 text-base transition hover:border-white hover:bg-white/10">
                  <IoGlobeOutline className="h-5 w-5" /> En
                </button>
                <Link href="/contactus" onClick={handleLinkClick} className="inline-flex w-full justify-center">
                  <button className="w-full rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition hover:bg-white/80">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Navbar;
