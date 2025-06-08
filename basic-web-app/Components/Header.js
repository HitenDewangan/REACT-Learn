'use strict'
import React, { use } from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
        <div className='p-4 h-16 bg-blue-500 text-white flex justify-between items-center'>
            <h1>HIDED</h1>
            <div className='flex gap-4'>
                <Link href="/About">About</Link>
                <Link href="/Product">Product</Link>
                <Link href="/Courses">Courses</Link>
            </div>

        </div>
    </>
  )
}

export default Header
