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

function Home() {
  return(
    <>
      <div dir='rtl' className="flex-col p-6">
        <Image
        src={Mysvg}
        alt='Hero SVG'
        className='w-full'
        />
        <h1 className="text-6xl font-extrabold my-4">تعلم اساسيات البرمجة و <span className='text-orange-500'>احترف</span> الجافا</h1>
        <Separator/>
        <h2 className="text-2xl my-6 text-gray-300 font-medium">استعد لعلم البرمجة من الصفر بالطريقة الصحيحة و انضم الى مجتمعنا الخاص لخوض رحلة تعليمية مميزة و مليئةبالتطبيقات العملية</h2>
        <Link href="/signup"><Button className='text-orange-500 my-2 font-extrabold text-2xl bg-white'>ابدأ رحلتك الان</Button></Link>
        <div className='my-8'>
          <h2 className='text-center my-4'>كانت لنا عدة مشاركات سابقة مع :</h2>
          <div className="flex flex-col my-2 justify-center item-center w-full">
            <div className="flex items-center justify-center my-3 w-full">
            <Image src={codevit} alt="codevit logo" width={80}/>
            <Image src={chessmaster} alt="codevit logo" width={80}/>
            <Image src={gdg} alt="codevit logo" width={80}/>
            <Image src={mooc} alt="codevit logo" width={80}/>
            </div>
            <div className="flex items-center justify-center my-3 w-full">
            <Image src={mozilla} alt="codevit logo" width={80}/>
            <Image src={uc2} alt="codevit logo" width={80}/>
            <Image src={ul} alt="codevit logo" width={80}/>
            </div>
          </div>
          <div className="flex-center"><Separator/></div>
          <Image src={HeroPic}
          alt="alaa bourega picture"
          className='my-4'
          />
          <h1 className="text-3xl text-center font-bold text-orange-500">علاء بورقعة</h1>
          <p className="text-center font-medium">خريج جامعة قسنطينة 2 - عبد الحميد مهري كلية تكنولوجيات الإعلام و الإتصال مهندس برمجيات مختص في عدة انطمة تطوير بخبرة محترمة من 5 سنوات عمل حر و مستقل .

مجال هندسة البرمجيات كان هوسي منذ نعومة اضافري مما ادى الى تفوفي بشهادة اساتذتي و عملائي.</p>
        </div>
      </div>
        <div className="flex-col flex-center h-1/2 p-2 bg-blue-950 w-full">
          <h1 className="text-orange-500 font-light">انت في المكان المناسب</h1>
        </div>
     </>
  )
}

export default Home