"use client"
import HorizontalScrollSection from "@/components/Mine/HorizentallScroll"
import business from "../../../public/business.png"
import calendar from "../../../public/calendar.png"
import discord from "../../../public/discord.png"
import network from "../../../public/network.png"
import support from "../../../public/support.png"
import Image from "next/image"
function About() {
  return (
    <>
      <div dir='rtl' className=" flex flex-col items-center justify-center pt-32 px-4">
        
        <div className="bg-blue-500 text-white text-2xl p-6 rounded-lg shadow-lg flex-row justify-center items-center">
          <div className="w-full flex flex-center">
          <Image src={business} alt="business man" className="w-1/2 p-2 h-auto" />
          </div>
          <div className="w-full flex flex-center">
          <p className="text-center text-4xl w-3/4 p-4 ">عند الإنتهاء من التدريب ستكون مستعدا لسوق العمل على الصعيد الوطني و العالمي حيث دمجنا بيداغوجيات الجامعة مع خبرتنا في السوق لننتج محتوى راقي و مفيد فعلا </p>
          </div>
          </div>
        <div>
        <div className="w-full flex flex-center">
          <Image src={business} alt="business man" className="w-1/2 p-2 h-auto" />
          </div>
        <p className="text-center text-4xl w-3/4 p-4 ">بنهاية الدورة سوف تكون قد بنيت معرض أعمال مميز خاص بك يؤهلك الى التقديم على عروض العمل الحر و العمل عن بعد </p>
        </div>
        <div>
        <div className="w-full flex flex-center">
          <Image src={business} alt="business man" className="w-1/2 p-2 h-auto" />
          </div>
        <p className="text-center text-4xl w-3/4 p-4 ">النقطة التي نفتخر بها اننا نؤطر إبداعكم و جهدكم لايصالكم الى بوابة عالم العمل عن بعد</p>
        </div>
        <div>
        <div className="w-full flex flex-center">
          <Image src={business} alt="business man" className="w-1/2 p-2 h-auto" />
          </div>
        <p className="text-center text-4xl w-3/4 p-4 ">الدورة مبنية على مسارين واب داف و ديسكتوب داف اما بالنسبة للاساسيات و الباكند فهي مشتركة بين الطرفين علما انها ستكون متوازنة بين الدراسة النضرية و التطبيقية</p>
        </div>
        <div>
        <div className="w-full flex flex-center">
          <Image src={business} alt="business man" className="w-1/2 p-2 h-auto" />
          </div>
        <p className="text-center text-4xl w-3/4 p-4 ">النشاطات لا تقتصر فقط على الدراسة فالمجموعة هدفها إنشاء شبكة معارف و تكوين بيئة محفزة على الإنتاج و الابداع</p>
        </div>
        <div>
        <div className="w-full flex flex-center">
          <Image src={business} alt="business man" className="w-1/2 p-2 h-auto" />
          </div>
        <p className="text-center text-4xl w-3/4 p-4 ">لا يوجد شروط للانضمام الى البرنامج أنت فقط تحتاج الى الالتزام و روح المثابرة لتحقيق الهدف المرجو و الاستفادة المثلى من الفرص المتاحة</p>
        </div>
        
        <div>
        <div className="w-full flex flex-center">
          <Image src={business} alt="business man" className="w-1/2 p-2 h-auto" />
          </div>
        <p className="text-center text-4xl w-3/4 p-4 ">برنامج مؤطر لمدة 12 شهرا بمعدل حصة يوميا اونلاين على منصة ديسكورد مع إحتمالية الزيادة لمعالجة المشاكل المتعلقة بالمشاركين</p>
        </div>
        
        
       <div className="text-7xl">
        <h1 className="font-bold">what you waiting?
        </h1>
       </div>
      </div>
    </>
  )
}

export default About