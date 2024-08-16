"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

function notfound() {
  return (
    <div dir='rtl' className='bg-black-1 flex flex-col justify-center items-center w-full h-screen'>
      <h1 className="text-9xl font-extrabold ">4<span className='text-orange-500'>0</span>4</h1>
      <h2 className="text-7xl font-bold text-center ">الصفحة غير موجودة</h2>
      <div className="w-1/2"><Link href="/"><Button className='bg-white text-black-2 font-bold text-3xl w-1/2 text-center '>العودة الى الصفحة الرئيسية</Button></Link></div>
    </div>
  )
}

export default notfound