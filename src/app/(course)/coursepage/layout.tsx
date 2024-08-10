import Navbar from '@/components/Mine/Navbar';
import React from 'react'

export default function coursepagelayout  ({
          children,
        }: Readonly<{
          children: React.ReactNode;
        }>) {
  return (
          <>
                    
                    <section>{children}</section>
          </>
  )
}

