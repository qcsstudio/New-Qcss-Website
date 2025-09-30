import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionContainer from '@/Component/Layout/SectionContainer'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { footerlogo } from '@/AllAssets/AllAsssets'

const Footer = () => {
  return (
    <footer className="mt-20 bg-black text-white">
      <SectionContainer className="max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-6 lg:w-2/5">
            <Image src={footerlogo} alt="QuantumCrafters Studio" width={320} height={80} className="h-auto w-48 sm:w-56" />
            <p className="text-balance text-base text-white/80 sm:text-lg">
              The next big thing starts here—drop us a line and let's get creating!
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-10 sm:flex-row sm:justify-end">
            <div>
              <h2 className="font-unbounded text-sm font-semibold uppercase tracking-[0.2em]">Quick Links</h2>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/aboutus">About us</Link>
                </li>
                <li>
                  <Link href="https://elevatrx.app">Products</Link>
                </li>
                <li>
                  <Link href="/courses">Training</Link>
                </li>
                <li>
                  <Link href="/blogs">Blog</Link>
                </li>
                <li>
                  <Link href="/career">Career</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-unbounded text-sm font-semibold uppercase tracking-[0.2em]">Follow Us</h2>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>
                  <Link href="https://www.linkedin.com/company/qcsstudio">LinkedIn</Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/qcsstudio">Facebook</Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/qcsstudio">Instagram</Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@qcsstudio">YouTube</Link>
                </li>
                <li>
                  <Link href="https://in.pinterest.com/qcsstudio">Pinterest</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFA587]">
              <FaPhoneAlt aria-hidden /> Phone
            </div>
            <Link href="tel:+918264017346" className="text-sm text-white/80">
              +91 8264017346
            </Link>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFA587]">
              <FaEnvelope aria-hidden /> Email
            </div>
            <Link href="mailto:info@qcsstudio.com" className="text-sm text-white/80">
              info@qcsstudio.com
            </Link>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFA587]">
              <FaMapMarkerAlt aria-hidden /> Address
            </div>
            <p className="text-sm text-white/80">
              D266 (C), 203, Second Floor
              <br /> Ram Hari Tower, Phase 8B, Industrial Area, Sector 74
              <br /> Mohali - 160055
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFA587]">
              <FaClock aria-hidden /> Working Hours
            </div>
            <p className="text-sm text-white/80">Mon to Fri: 9:00am - 7:00pm | Sat/Sun: Closed</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} QuantumCrafters Studio Pvt. Ltd. All rights reserved.</span>
          <Link href="/privacy-policy" className="text-sm text-white hover:text-white/80">
            Privacy Policy / Terms of Service
          </Link>
        </div>
      </SectionContainer>
    </footer>
  )
}

export default Footer
