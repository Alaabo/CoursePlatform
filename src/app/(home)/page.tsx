import React from 'react'
import Image from 'next/image'
import HeroPic from '../Hero.png'
import Mysvg from '../../../public/pcandphone.svg'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import chessmaster from '../../../public/chessmaster.png'
import codevit from '../../../public/codevit.png'
import gdg from '../../../public/gdg.png'
import mooc from '../../../public/mooc.png'
import mozilla from '../../../public/mozilla.png'
import uc2 from '../../../public/uc2.png'
import ul from '../../../public/untitledlux.png'
import { ChevronLeft } from 'lucide-react'
import "../globals.css";
function Home() {
  return(
    <>
      <div dir='rtl' className=" overflow-hidden flex-col md:flex p-6 md:p-0 lg:p-16">
        <div className='md:my-12 md:pt-10 md:flex w-full md:justify-center md:flex-row-reverse'>
        <div>
        <Image
        src={Mysvg}
        alt='Hero SVG'
        className='h-full w-full'
        />
        </div>
        <div>
        <h1 className="md:pr-4 md:text-8xl lg:text-9xl text-6xl font-extrabold my-4">تعلم اساسيات البرمجة و <span className='text-orange-500'>احترف</span> الجافا</h1>
        <Separator/>
        <div className="md:hidden py-4 lg:block lg:p-6 lg:text-7xl">
        <Link href="/bootcamp"><Button className='md:hidden lg:block text-orange-500 my-2 lg:h-full font-extrabold text-2xl lg:text-7xl bg-white'>ابدأ رحلتك الان</Button></Link>
        
        </div>
        </div>
        </div>
        <div className='md:flex-row md:w-full md:items-center md:justify-center'>
        <h2 className="md:text-6xl md:text-center md:pr-4 text-2xl my-6 text-gray-300 font-medium">استعد لتعلم البرمجة من الصفر بالطريقة الصحيحة و انضم الى مجتمعنا الخاص لخوض رحلة تعليمية مميزة و مليئةبالتطبيقات العملية</h2>
        <div className="md:flex-center hidden">
        <Link href="/about"><h1 className='md:flex md:flex-center md:hover:text-white text-orange-500 my-2 md:text-4xl font-extrabold text-2xl '>إكتشف محتويات الدورة<ChevronLeft className='w-[32px] h-[32px] font-bold'></ChevronLeft></h1></Link>
        
        </div>
        </div>
        
          <div className="hidden lg:hidden md:flex-center md:mt-4"><Separator/></div>
        <div className='my-8'>
          <h2 className='text-center my-4 md:text-6xl md:font-bold'>كانت لنا عدة مشاركات سابقة مع :</h2>
          <div className="flex flex-col my-2 justify-center item-center w-full">
            <div className="flex items-center justify-center my-3 w-full">
            <Image src={codevit} alt="codevit logo" className='w-[80px] md:w-[125px]'/>
            <Image src={chessmaster} alt="codevit logo" className='w-[80px] md:w-[125px]'/>
            <Image src={gdg} alt="codevit logo" className='w-[80px] md:w-[125px]'/>
            <Image src={mooc} alt="codevit logo" className='w-[80px] md:w-[125px]'/>
            </div>
            <div className="flex items-center justify-center my-3 w-full">
            <Image src={mozilla} alt="codevit logo" className='w-[80px] md:w-[125px]'/>
            <Image src={uc2} alt="codevit logo" className='w-[80px] md:w-[125px]'/>
            <Image src={ul} alt="codevit logo" className='w-[80px] md:w-[125px]'/>
            </div>
          </div>
          <div className="flex-center md:my-6 "><Separator/></div>
          <div className='md:flex-row md:flex-center'>
          <div><Image src={HeroPic}
          alt="alaa bourega picture"
          className='my-4 md:w-[512px] lg:w-[1000px]'
          /></div>
          <div className='md:flex-row md:justify-start md:items-start w-full md:p-6'>
          <h1 className="text-3xl lg:text-9xl lg:p-8 text-center font-bold text-orange-500">علاء بورقعة</h1>
          <p className="text-center lg:text-4xl font-medium">خريج جامعة قسنطينة 2 - عبد الحميد مهري كلية تكنولوجيات الإعلام و الإتصال مهندس برمجيات مختص في عدة انطمة تطوير بخبرة محترمة من 5 سنوات عمل حر و مستقل .

مجال هندسة البرمجيات كان هوسي منذ نعومة اضافري مما ادى الى تفوفي بشهادة اساتذتي و عملائي.</p>
          
          </div>
          </div>
        </div>
      </div>
        <div className="flex-col flex-center h-1/2 p-2 bg-blue-950 w-full">
          <h1 className="text-orange-500 font-light">انت في المكان المناسب</h1>
        </div>
     </>
  )
}

export default Home