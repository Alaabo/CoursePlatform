import Link from 'next/link'
import React from 'react'


import { ChevronDown } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Separator } from '../ui/separator'
import Icon from '../../../public/logo_onBlack_full.png'
import mobNav from "../../../public/Icon.png"
import Image from 'next/image'
const Navbar = () => {
  return (
    <>
    <div className="fixed top-0  w-full p-4 lg:p-8 ">
          <div className='flex justify-between w-full'>
          <Link href={"/"} className='hidden lg:block md:block'>
            <Image
            src={Icon}
            alt='coddz logo'
            width={128}
            className='hidden md:block md:h-auto'
            />
          </Link>
          <Link href={"/"} className='md:hidden lg:hidden'>
            <Image
            src={mobNav}
            alt='coddz logo'
            width={32}
            height={32}
            className=' md:hidden w-auto h-auto'
            />
          </Link>
          <div className="md:hidden">
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <ChevronDown className='w-[32px] h-[32px] font-bold border rounded-sm'></ChevronDown>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-black-2 text-white font-medium'>
            <Link href={'/'}><DropdownMenuItem>الصفحة الرئيسية</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator/>
              <Link href={'/signin'}><DropdownMenuItem>تسجيل الدخول</DropdownMenuItem>
              </Link>
              <Link href={"/signup"}>
              <DropdownMenuItem>فتح حساب</DropdownMenuItem></Link>
              <DropdownMenuSeparator/>
              <Link href={"/about"}>
              <DropdownMenuItem>حول الدورة</DropdownMenuItem></Link>
              <Link href={"/contact"}>
              <DropdownMenuItem>تواصل معي</DropdownMenuItem></Link>
              
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          <div className="md:flex-center md:pl-4 hidden">
            <Link href="/about"><h1 className='font-bold px-2 hover:text-orange-500 lg:text-4xl lg:mx-4 md:text-sm'>حول الدورة</h1></Link>
            <Link href="/contact"><h1 className='font-bold px-2 hover:text-orange-500 lg:text-4xl lg:mx-4 md:text-sm'>تواصل معي</h1></Link>
            <Link href="/signup"><h1 className='font-bold px-2 hover:text-orange-500 lg:text-4xl lg:mx-4 md:text-sm'>فتح حساب</h1></Link>
            <Link href="/signin"><h1 className='font-bold px-2 hover:text-orange-500 lg:text-4xl lg:mx-4 md:text-sm'>تسجيل الدخول</h1></Link>
          </div>
          </div>
          <div className=" md:hidden flex justify-center"><Separator/></div>
        </div>
          </>
  )
}

export default Navbar