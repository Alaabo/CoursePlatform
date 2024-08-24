"use client"
import React from 'react'
import Image from 'next/image'
import HeroPic from '../Hero.png'
import Mysvg from '../../../public/hero@4x.png'
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
import { motion } from 'framer-motion'
import TypingEffect from '@/components/Mine/TypingEffect'
import ScrollAnimation from '@/components/Mine/ScrollAnimation'
import StaggeredScrollAnimation from '@/components/Mine/PoppingAnimation'

function Home() {

  
  return(
    <>
      <div dir='rtl' className=" overflow-hidden flex-col md:flex p-6 md:p-0 lg:p-16">
        <div className='md:my-12 md:pt-10 md:flex w-full md:justify-center md:flex-row-reverse'>
        <div className='felx-center flex items-center justify-center mt-6'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >

        <Image
        src={Mysvg}
        alt='Hero SVG'
        className='h-auto w-auto'
        />
        </motion.div>
        </div>
        <div>
        <h1 className="md:pr-4 md:text-6xl 2xl:text-9xl  text-6xl font-extrabold my-4"> 
          <TypingEffect text="إنضم إلى النخبة و إبني مستقبلا كمطور و مبرمج" speed={50}/>
           </h1>
        <Separator/>
        <div className="md:hidden py-4 lg:block lg:p-6 lg:text-7xl">
        <motion.div
        initial={{ opacity: 0 , x: -100}}
        animate={{opacity: 1 , x: 0}}
        transition={{ duration: 1.5 }}

        >
        <Link href="/about"><Button className='md:hidden lg:block text-orange-500 my-2 lg:h-full font-extrabold text-2xl lg:text-7xl bg-white'>ابدأ رحلتك الان</Button></Link>
        </motion.div>
        </div>
        </div>
        </div>
        <ScrollAnimation>
        <div className='md:flex-row md:w-full md:items-center md:justify-center'>
        <h2 className="md:text-6xl md:text-center md:pr-4 text-2xl my-6 text-gray-300 font-medium">ادخل إلى مخيم البرمجة من أوسع الابواب مقابل 40000 دج
        </h2>
        <h2 className="md:text-6xl md:text-center md:pr-4 text-2xl my-6 text-gray-300 font-medium">برنامج تدريبي إنطلاقا من الاساسيات إلى غاية تطوير برامج او مواقع كاملة بمعايير عالمية
        </h2>
        <div className="md:flex-center hidden">
        <Link href="/about"><h1 className='md:flex md:flex-center md:hover:text-white text-orange-500 my-2 md:text-4xl font-extrabold text-2xl '>إكتشف محتويات الدورة<ChevronLeft className='w-[32px] h-[32px] font-bold'></ChevronLeft></h1></Link>
        
        </div>
        </div>
        </ScrollAnimation>
        
          <div className="hidden lg:hidden md:flex-center md:mt-4"><Separator/></div>
        <div className='my-8'>
          <h2 className='text-center my-4 md:text-6xl md:font-bold'>مؤسسات وضعت ثقتها فينا
          </h2>
          <div className="flex flex-col my-2 justify-center item-center w-full">
            <StaggeredScrollAnimation>
            <Image src={codevit} alt="codevit logo" className='w-[155px] '/>
            <Image src={chessmaster} alt="codevit logo" className='w-[125px] '/>
            <Image src={gdg} alt="codevit logo" className='w-[125px] '/>
            <Image src={mooc} alt="codevit logo" className='w-[125px] '/>
            <Image src={mozilla} alt="codevit logo" className='w-[125px] '/>
            <Image src={uc2} alt="codevit logo" className='w-[125px] '/>
            <Image src={ul} alt="codevit logo" className='w-[125px] '/>
            </StaggeredScrollAnimation>
          </div>
          <div className="flex-center md:my-6 "><Separator/></div>
          <ScrollAnimation>
          <div className='md:flex-row md:flex-center'>
          <div>
            <Image src={HeroPic}
            alt="alaa bourega picture"
            className='my-4 md:w-[512px] lg:w-[1000px]'
            />
          </div>
          <div className='md:flex-row md:justify-start md:items-start w-full md:p-6'>
          <h1 className="text-2xl md:text-[60px] w-full lg:text-6xl lg:p-2 text-center font-bold text-orange-500">علاء بورقعة</h1>
          <h2 className='text-center w-full font-light text-orange-500 mb-2 underline'>Information System Ingeneer , Fullstack web developer</h2>
          <p className="text-center lg:text-4xl font-medium"> تحصلت على شهادتي الجامعية من جامعة قسنطينة 2 - عبد الحميد مهري  الجزائر , عملت كمبرمج حر لمدة 04 سنوات و كان لي الحظ لاكون عظوا مؤسسا لمجموعة <span className="text-orange-500">UntitledLux</span> اين كانت لنا بصمة خالدة ليومنا هذا في عدة جامعات و محافل رسمية على الصعيد المحلي و العالمي و ذلك بشهادة عملائي و اساتذتي في الجامعة 
          </p>
          
          </div>
          </div>
          </ScrollAnimation>
        </div>
      </div>
        <div className="flex-col flex-center h-1/2 p-2 bg-blue-950 w-full">
          <h1 className="text-orange-500 font-light">انت في المكان المناسب</h1>
        </div>
     </>
  )
}

export default Home