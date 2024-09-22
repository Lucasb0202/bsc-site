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
import { rgbToHex } from '@mui/material'

export const runtime = "edge"

const OnlineTraining = () => {
  const cardItems = [
    {
      title: "Real-time Leaderboards",
      description: "Compare your performances with others trained by the same coaching provider. Coach set benchmarks in your program will drive real time leaderboards with full ‘like and commenting’ ability.",
      imageUrl: "/photo-1.png"
    },
    {
      title: "Ad-hoc Sessions",
      description: "Occasionally do your own workout? Or want to track the time walking the dog? No problem, supplement your coaching by building your own sessions, on the same day, in the same calendar. Everything stored in one place!",
      imageUrl: "/photo-2.png"
    },
    {
      title: "Calendar Feedback",
      description: "Your coach will be able to drop personalised comments, directly onto your training calendar, specific to your performances. A certain session might not go quite as planned, discuss it there and then with your coach. Hit a new high, let your coach know directly next to the performance!",
      imageUrl: "/photo-1.png"
    },
    {
      title: "Program Communities",
      description: "Integrate yourself into the community. We will make you part of your program’s community, where you can share and ask anything within the group. Ask questions, share your progress, throw some high fives, it’s all possible!",
      imageUrl: "/photo-4.png"
    },
    {
      title: "1-2-1 Chat",
      description: "Our dedicated messenger service will let you share your performances, direct from your training calendar, to your coach, and chat 1-2-1 about anything on your mind.",
      imageUrl: "/photo-1.png"
    },
    {
      title: "Customisable Benchmark Tracker",
      description: "Track an unlimited amount of benchmarks. Link media to each performance and see your progression over time. Share benchmarks to your coach for feedback.",
      imageUrl: "/photo-1.png"
    },
  ]

  return ( 
    <div className='flex flex-col items-center mt-7'>
      <div className='grid grid-cols-1 gap-3 w-5/6 md:grid-cols-2 lg:grid-cols-3'>
        {cardItems.map((item, index) => {
          return(
            <Card 
              style={{ 
                backgroundImage: `url(${item.imageUrl})`,
              }} 
              key={index}
              className='relative bg-cover bg-center'
            >
              <div className='absolute z-10 right-0 left-0 bottom-0 top-0 bg-black/55'></div>
              <div className='relative z-20'>
                <CardHeader>
                  <CardTitle className='md:text-[25px] lg:text-[30px] text-[20px]'>{item.title}</CardTitle>
                  <Separator className='bg-blue-500 h-[2px]'/>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-white md:text-[20px] text-[14px]'>{item.description}</CardDescription>
                </CardContent>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
 
export default OnlineTraining;
