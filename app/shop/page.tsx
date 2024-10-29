'use client'

import React from 'react'
import { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator' 
import Image from 'next/image'

export const runtime = "edge"

const Shop = () => {

  return ( 
    <div className='flex items-center justify-center h-full'>
      <h1 className='text-[60px]'>COMING SOON</h1>
    </div>
  );
}
 
export default Shop;
