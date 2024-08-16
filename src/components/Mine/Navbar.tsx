import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronLeft } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Separator } from '../ui/separator'

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between w-full p-4">
          <Link href={"/"}><h1 className='font-bold text-2xl cursor-pointer'>./COD<span className='text-orange-500'>DZ</span></h1></Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <ChevronDown className='w-[32px] h-[32px] font-bold border rounded-sm'></ChevronDown>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-black-2 text-white font-medium'>
            <Link href={'/'}><DropdownMenuItem>الصفحة الرئيسية</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator/>
              <Link href={'/signin'}><DropdownMenuItem>تسجيل الدخول</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator/>
              <Link href={"/signup"}>
              <DropdownMenuItem>فتح حساب</DropdownMenuItem></Link>
              
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
          <div className="flex justify-center"><Separator/></div>
          </>
  )
}

export default Navbar