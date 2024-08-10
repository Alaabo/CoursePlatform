import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <section className='bg-black-2 flex flex-row justify-between items-center p-4'>
          <Link href="/"><div className='text-orange-1 text-2xl font-bold'>.CSCC</div></Link>
          <div className='flex flex-row '>
                    <div className=" font-bold px-4">Course</div>
                    <div className=" font-bold px-4">Career</div>
                    {/*Clerck Auth*/}
          </div>
    </section>
  )
}

export default Navbar