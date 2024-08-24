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


const OnlineTraining = () => {
  const cardItems = [
    {
      title: "Real-time Leaderboards",
      description: "Compare your performances with others trained by the same coaching provider. Coach set benchmarks in your program will drive real time leaderboards with full ‘like and commenting’ ability."
    },
    {
      title: "Ad-hoc Sessions",
      description: "Occasionally do your own workout? Or want to track the time walking the dog? No problem, supplement your coaching by building your own sessions, on the same day, in the same calendar. Everything stored in the one place!"
    },
    {
      title: "Calendar Feedback",
      description: "Your coach will be able to drop personalised comments, directly onto your training calendar, specific to your performances. A certain session might not go quite as planned, discuss it there and then with your coach. Hit a new high, let your coach know directly next to the performance!"
    },
    {
      title: "Program Communities",
      description: "Integrate yourself into the community. We will make you part of your program’s community, where you can share and ask anything within the group. Ask questions, share your progress, throw some high fives, it’s all possible!"
    },
    {
      title: "1-2-1 Chat",
      description: "Our dedicated messenger service will let you share your performances, direct from your training calendar, to your coach, and chat 1-2-1 about anything on your mind."
    },
    {
      title: "Customisable Benchmark Tracker",
      description: "Track an unlimited amount of benchmarks. Link media to each performance and see your progression over time. Share benchmarks to your coach for feedback."
    },
  ]

  return ( 
    <div className='flex flex-col items-center mt-7'>
      <div>
        {/* <Image 
          className='rounded-[13px]'
          src='/coach.jpg'
          alt='BSC Coach'
          width={500}
          height={0}
        /> */}
      </div>

      <div className='w-5/6 grid grid-cols-3 gap-3'>
        {cardItems.map((item, index) => {
          return(
            <Card>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <Separator className='bg-blue-500 h-[2px]'/>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
 
export default OnlineTraining;
