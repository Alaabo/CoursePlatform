import React from 'react'
import Image from 'next/image'
import HeroPic from '../Hero.png'
import Mysvg from '../../../public/pcandphone.svg'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
function Home() {
  return(
    <>
      <div dir='rtl' className="flex flex-col gap-3 pt-10 justify-center items-center ">
          <div className="flex-row flex justify-around items-center w-full h-screen">
            
              <div dir='rtl' className='p-2 bg-white bg-opacity-10 rounded-lg m-4 w-2/3'>
              <p className=' text-8xl font-extrabold md:text-6xl text-right'> نرافقك من <span className="text-green-2 ">الالف</span> الى الياء في رحلة <span className=' text-orange-600'>المطور</span> </p>
               
              <Link href={"/coursepage"}   ><Button variant={"hero"}  className='  p-4 py-12 mt-10 text-4xl' >انطلق في الرحلة<ChevronLeft className='h-[32 rem] w-[16 rem] mx-3'/></Button></Link>
              <h3 className='py-4 text-xl font-semibold'>تكوين شامل و متناسب مع وقتك و ميزانيتك</h3>
              </div>
              <div>
              <Image
              src={Mysvg}
              alt='Hero Picture'
              className='z-50'
              
              />
              </div>
            
          </div>
          <div className="text-8xl font-semibold m-4">رحلتك معنا تنتهي عندما تصبح جاهزا لسوق العمل</div>
          <div className=" p-4  justify-center items-center w-2/3 ">
            <div className="glassmorphism backdrop-blure-2xl bg-white bg-opacity-5 rounded-[35px] flex flex-row  p-6">
              <Image
              src={HeroPic}
              alt='hero pic'
              width={250}
              height={250}
              />
              <div className='w-full'>
              <h1 className="my-3 font-bold text-4xl">من اكون ؟</h1>
              <p>بورقعة علاء خريج جامعة قسنطينة 2 - عبد الحميد مهري كلية تكنولوجيات الإعلام و الإتصال مهندس برمجيات مختص في عدة انطمة تطوير بخبرة محترمة من 5 سنوات عمل حر و مستقل .</p>
              <p>مجال هندسة البرمجيات كان هوسي منذ نعومة اضافري مما ادى الى تفوفي بشهادة اساتذتي و عملائي.
              </p>
              </div>
            </div>
          </div>
      </div>
     </>
  )
}

export default Home