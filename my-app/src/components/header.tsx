import React from 'react'
import Link from 'next/link'

function NavbarPage() {
  return (
     <div className='absolute z-10 text-white w-full'>
      <nav className="container flex items-center justify-between mx-auto h-14">
        <Link href="/" className="font-bold">Home</Link>
        <div className="flex gap-2">
          <Link href="/about" >About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavbarPage