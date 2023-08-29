'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {
  const pathname = usePathname();
  return (
    <nav className='h-24'>
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <a className="font-bold text-2xl lg:text-4xl" href="#">
          Next App
        </a>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex">
            <li><Link className={`px-4 hover:text-gray-800 ${pathname === '/' ? 'font-bold' : ''}`} href="/">Home</Link></li>
            <li><Link className={`px-4 hover:text-gray-800 ${pathname === '/about' ? 'font-bold' : ''}`} href="/about">About</Link></li>
            <li><Link className={`px-4 hover:text-gray-800 ${pathname === '/contact' ? 'font-bold' : ''}`} href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header