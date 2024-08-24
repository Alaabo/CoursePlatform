"use client"
import HorizontalScrollSection from "@/components/Mine/HorizentallScroll"
import business from "../../../public/business.png"
import calendar from "../../../public/calendar.png"
import discord from "../../../public/discord.png"
import network from "../../../public/network.png"
import balance from "../../../public/balance.png"
import support from "../../../public/support.png"
import condition from "../../../public/condition.png"
import goals from "../../../public/goals.png"
import proud from "../../../public/proud.png"
import Image from "next/image"
import TypingEffect from "@/components/Mine/TypingEffect"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
function About() {
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const scrollToSection2 = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div dir='rtl' className=" snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide">
        
        <div  className=" h-screen text-white text-2xl snap-start p-2  flex-col flex justify-between py-8">
          <div className="w-full h-2/5">
          
          <h1 className="text-center text-4xl w-full pt-10 ">
          <TypingEffect text="&quot;
            عند الإنتهاء من التدريب ستكون مستعدا لسوق العمل على الصعيد الوطني و العالمي حيث دمجنا بيداغوجيات الجامعة مع خبرتنا في السوق لننتج محتوى راقي و مفيد فعلا&quot;" speed={25}/>
          </h1>
          </div>
          <div className="h-2/5">
            <Image src={goals} alt="proud man vector art" className=""/>
          </div>
          <div className="flex w-full  py-6 flex-center h-1/5"><Button onClick={scrollToSection2}  className="text-orange-500 font-extrabold text-6xl " variant={"outline"}><ChevronDown  /></Button>
          </div>
          </div>

        <div ref={section2Ref} className=" text-white text-2xl snap-start h-screen flex flex-col justify-center items-center">
        <div className="w-1/2 flex flex-center">
          <motion.div
          initial={{opacity:0 , y: 500 , scale: 0}}
          whileInView={{opacity:1 , y:0 ,scale:2}}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}>
            <Image src={business} alt="business man" className="w-full p-2 h-auto" />
          </motion.div>
          </div>
          <motion.div
          className="w-full flex-center"
          initial={{opacity:0 , y: -500}}
          whileInView={{opacity:1 , y:0}}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}>
            <p className="text-center text-4xl w-3/4 p-4 my-3 bg-black-1 z-50 bg-opacity-35 bg-blur-lg ">بنهاية الدورة سوف تكون قد بنيت معرض أعمال مميز خاص بك يؤهلك الى التقديم على عروض العمل الحر و العمل عن بعد </p>
          </motion.div>
        </div>

        <div  className=" text-white text-2xl snap-start h-screen flex flex-col justify-center items-center"> 
        <div className="w-full flex flex-center">
          <motion.div
          initial={{scale:1.2 , opacity:0}}
          whileInView={{scale:1 , opacity: 1 }}
          transition={{duration : 0.3}}
          viewport={{ once: true, amount: 0.5 }}
          >
          <Image src={proud} alt="business man" className=" p-2 h-auto" />
          </motion.div>
          </div>
          <div className="w-full">
          <motion.p
          className="w-full flex-center text-center text-4xl p-4"
          initial={{scale:0 , opacity:0}}
          whileInView={{scale:1 , opacity: 1 }}
          transition={{duration : 0.3}}>
            النقطة التي نفتخر بها اننا نؤطر إبداعكم و جهدكم لايصالكم الى بوابة عالم العمل عن بعد
          </motion.p>
          </div>
        </div>

        <div className=" text-white text-2xl snap-start h-screen flex flex-col justify-center items-center">
        <div className="w-full h-1/2 flex flex-center">
          <motion.div
           initial={{ y: -100, opacity: 0 }}  // Start above the viewport and invisible
           whileInView={{ y: 0, opacity: 1 }}  // End at its normal position, fully visible
           transition={{ duration: 0.6, ease: 'easeOut' }}  // Smooth falling effect
           viewport={{ once: true, amount: 0.5 }}  // Trigger animation when 50% of the div is in view
          >
          <Image src={balance} alt="business man" className=" p-2 h-auto" />
          </motion.div>
          </div>
          <motion.p
          className="text-center text-4xl w-full p-4 "
          initial={{opacity:0 , scale: 0}}
          whileInView={{opacity: 1,scale:1}}
          transition={{duration:.2}}
          >
            الدورة مبنية على مسارين واب داف و ديسكتوب داف اما بالنسبة للاساسيات و الباكند فهي مشتركة بين الطرفين علما انها ستكون متوازنة بين الدراسة النضرية و التطبيقية
          </motion.p>
        
        </div>

        <div className=" text-white text-2xl snap-start h-screen flex flex-col justify-center items-center">
        <div className="w-full h-1/2 flex flex-center">
          <motion.div
          initial={{scale:0}}
          whileInView={{scale:1}}
          transition={{duration:.2 , ease: "easeInOut"}}
          >
          <Image src={network} alt="business man" className=" p-2 h-auto" />
          </motion.div>
          </div>
          <motion.div
          initial={{opacity:0 , y:20}}
          whileInView={{opacity: 1 , y:0}}
          transition={{duration:.3 , easings:"easeInOut"}}
          >
          <p className="text-center text-4xl w-full p-4 ">النشاطات لا تقتصر فقط على الدراسة فالمجموعة هدفها إنشاء شبكة معارف و تكوين بيئة محفزة على الإنتاج و الابداع</p>
          </motion.div>
        </div>

        <div  className=" text-white text-2xl snap-start h-screen flex flex-col justify-center items-center">
        <div className="w-full flex flex-center">
          
          <motion.div 
          initial={{opacity:0 , y:20}}
          whileInView={{opacity: 1 , y:0}}
          transition={{duration:1 , easings:"easeInOut"}}>
            <Image src={condition} alt="business man" className=" p-2 h-auto" />
            </motion.div>
          </div>
        <p className="text-center text-4xl  p-4 ">لا يوجد شروط للانضمام الى البرنامج أنت فقط تحتاج الى الالتزام و روح المثابرة لتحقيق الهدف المرجو و الاستفادة المثلى من الفرص المتاحة</p>
        </div>
        
        <div className=" text-white text-2xl snap-start h-screen flex flex-col justify-center items-center">
        <div className="w-full flex flex-center">
          <motion.div
          initial={{scale:0}}
          whileInView={{scale:1}}
          transition={{duration:.2 , ease: "easeInOut"}}
          >
          <Image src={discord} alt="business man" className=" p-2 h-auto" />
          </motion.div>
          </div>
          <motion.div
          initial={{opacity:0 , y:20}}
          whileInView={{opacity: 1 , y:0}}
          transition={{duration:.3 , easings:"easeInOut"}}
          >
          <p className="text-center text-4xl  p-4 ">برنامج مؤطر لمدة 12 شهرا بمعدل حصة يوميا اونلاين على منصة ديسكورد مع إحتمالية الزيادة لمعالجة المشاكل المتعلقة بالمشاركين</p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default About