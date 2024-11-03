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

const Coaches = () => {

  const teamItems = [
    {
      name: "Neil",
      description: "a;slkdjf;alskdjf;alskdjf;laskjdf",
      imageUrl: '/neil-2.jpg'
    },
    {
      name: "Stacy",
      description: "a;slkdjf;alskdjf;alskdjf;laskjdf",
      imageUrl: '/stacy.jpg'
    },
  ]

  return ( 
    <div className='flex flex-col mt-10 items-center h-full'>
      <h1 className='text-[130px]'>THE TEAM</h1>
      <div className='w-full max-w-6xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {teamItems.map((item, index) => {
            return (
              <Card
                key={index}
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                }}
                className='relative bg-cover rounded-2xl min-h-[250px] sm:min-h-[300px] md:min-h-[400px]'
              >
                <div className='flex items-end h-full'>
                  <CardFooter className='bg-black/70 flex justify-center w-full text-[40px] p-0'>
                    {item.name}
                  </CardFooter>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
 
export default Coaches;
