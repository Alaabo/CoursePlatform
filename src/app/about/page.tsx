"use client"
import React, { useState } from 'react'

function About() {
  const [Text1 , setText1] = useState<string>("08 اسابيع")
  return (
    <>
      <div dir='rtl' className="flex-col pt-16 px-2">
        <div className="p-4 flex-col w-full flex-center">
          <div className='glassmorphism rounded-sm p-4' onClick={()=>setText1("hello")}><h1>{Text1}</h1></div>
          <div><h1>حصص اونلين</h1></div>
          <div><h1>تطبيقات عملية</h1></div>
          <div><h1>متابعة مخصصة</h1></div>
          <div><h1>انشاء معرض اعمال</h1></div>
        </div>
      </div>
    </>
  )
}

export default About