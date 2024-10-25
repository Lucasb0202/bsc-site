"use client"

import React, { useRef } from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll } from "framer-motion"
import { useEffect } from 'react'
import gsap from "gsap"
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis } from "lenis/react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const runtime = "edge"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  // const ref = useRef<HTMLDivElement>(null)
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "1.33 1"]
  // })

  useEffect(() => {
    const textElements = document.querySelectorAll('h1.animate-text');

    textElements.forEach((element) => {
      // Split the text into characters for each element
      const splitText = new SplitType((element as HTMLElement), { types: 'chars' });
      const chars = splitText.chars;

      // Create a GSAP animation for each element
      gsap.fromTo(
        chars,
        {
          y: 150,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1, 
          stagger: 0.05,
          duration: 2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 100%', 
            // end: 'top 20%', 
            // toggleActions: 'play none none none', 
          }
        }
      );
    });

    const scrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse"
    }
    
    const leftXValues = [-800, -900, -400]
    const rightXValues = [800, 900, 400]
    const leftRotationValues = [-30, -20, -35]
    const rightRotationValues = [30, 20, 35]
    const yValues = [100, -150, -400]
    
    gsap.utils.toArray(".row").forEach((row, index) => {
      const cardLeft = (row as HTMLElement).querySelector(".card-left") as HTMLElement
      const cardRight = (row as HTMLElement).querySelector(".card-right") as HTMLElement 
      
      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            
            cardLeft.style.transform = `translateX(${progress * leftXValues[index]}px) 
            translateY(${progress * yValues[index]}px) 
            rotate(${progress * leftRotationValues[index]}deg)`;
            cardRight.style.transform = `translateX(${progress * rightXValues[index]}px)
            translateY(${progress * yValues[index]}px) 
            rotate(${progress * rightRotationValues[index]}deg)`;
          }
        }
      })
    })
    
    gsap.to(".logo", {
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    })
    
    gsap.to(".line p", {
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    })
    
    // gsap.to(".button", {
      //   y: 0,
      //   opacity: 1,
      //   delay: 0.25,
      //   duration: 0.5,
      //   ease: "power1.out",
      //   scrollTrigger: scrollTriggerSettings,
      // })
      
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
      
    }, [])
    
    const generateRows = () => {
      const rows = []
      for (let i = 1, j = 4; i <= 3; i++, j++) {
        rows.push(
          <div className="row" key={i}>
          <div className="card card-left">
            <img className='img' src={`/photo-1.jpg`} alt="" />
          </div>
          <div className="card card-right">
            <img className='img' src={`/photo-4.jpg`} alt="" />
          </div>
        </div>
      )
    }
    return rows
  }
  
  const cardItems = [
    {
      title: "Real-time Leaderboards",
      description: "Compare your performances with others trained by the same coaching provider. Coach set benchmarks in your program will drive real time leaderboards with full ‘like and commenting’ ability.",
      imageUrl: "/photo-1.jpg"
    },
    {
      title: "Ad-hoc Sessions",
      description: "Occasionally do your own workout? Or want to track the time walking the dog? No problem, supplement your coaching by building your own sessions, on the same day, in the same calendar. Everything stored in one place!",
      imageUrl: "/photo-2.jpg"
    },
    {
      title: "Calendar Feedback",
      description: "Your coach will be able to drop personalised comments, directly onto your training calendar, specific to your performances. A certain session might not go quite as planned, discuss it there and then with your coach. Hit a new high, let your coach know directly next to the performance!",
      imageUrl: "/photo-3.jpg"
    },
    {
      title: "Program Communities",
      description: "Integrate yourself into the community. We will make you part of your program’s community, where you can share and ask anything within the group. Ask questions, share your progress, throw some high fives, it’s all possible!",
      imageUrl: "/photo-4.jpg"
    },
    {
      title: "1-2-1 Chat",
      description: "Our dedicated messenger service will let you share your performances, direct from your training calendar, to your coach, and chat 1-2-1 about anything on your mind.",
      imageUrl: "/photo-5.jpg"
    },
    {
      title: "Customisable Benchmark Tracker",
      description: "Track an unlimited amount of benchmarks. Link media to each performance and see your progression over time. Share benchmarks to your coach for feedback.",
      imageUrl: "/photo-6.jpg"
    },
  ]

  return (
    <>
      <ReactLenis root>
        <div className="relative h-screen">
          <video 
            className='hidden md:absolute md:top-0 md:left-0 md:w-full md:h-full md:object-cover md:blur-sm md:block'
            src="/videoBg.mp4"
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <p className="text-white lg:text-5xl md:text-4xl text-3xl font-bold text-center px-8">
              BSC GYM IS A PLACE WHERE YOU LEARN TO PUSH YOUR LIMITS. OUR COACHING PLATFORM IS HERE TO TEACH YOU THE FUNDAMENTALS OF TRAINING EFFICIENTLY AND EFFECTIVELY.
            </p>
            {/* <Button
              variant='bsc'
              className="mt-4 text-[25px]"
              size='lg'
            >
              <Link
                href='/online-training'
              >
              LEARN MORE
              </Link>
            </Button> */}
          </div>
        </div>

        <div className='flex justify-center m-11'>
          <h1 className='clip-path-animate-text animate-text lg:text-[130px] md:text-[80px] text-[50px]'>WHO ARE WE?</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
          <div className='flex justify-center'>
            <div className='flex flex-col w-4/5 md:ml-12 lg:ml-24'>
              <h1 className='clip-path-animate-text animate-text text-[#5e5d5d] text-[40px] md:text-[70px] lg:text-[100px]'>OUR MISSION</h1>
              <p className='text-white text-[12px] md:text-[18px] lg:text-[28px]'>
                At BSC, we believe that fitness is simple when
                approached the right way. We provide the tools and
                guidance you need to reach your fitness goals
                without the guesswork, through personalized and
                professional coaching. Our gym offers a unique,
                private, small group personal training experience
                that allows for individualized attention in a group
                setting. What makes BSC unique is our exclusivity. We&apos;re not a walk-in
                gym - our clients book their sessions in advance, ensuring a
                well-structured and personalized experience. Our small
                group classes (8-12 people) allow for a high level of
                individual attention while still fostering a supportive group
                environment. Every client is known by their coach, and every
                session is designed with their specific needs in mind.
              </p>
            </div>
          </div>
          <div className='flex justify-center'>
            <img 
              src="/member-1.jpg" 
              alt="member" 
              className='max-w-full h-[300px] md:h-[600px] lg:h-[800px] rounded-2xl' 
            />
          </div>
        </div>
        
        <div className='flex justify-center'>
          <div className='flex flex-col w-4/5'>
            <div className='flex flex-col'>
              <h1 className='clip-path-animate-text animate-text text-[#FFD700] lg:text-[100px] md:text-[70px] text-[50px]'>MAIN GOALS</h1>
              <p className='text-white md:text-[16px] lg:text-[28px] mb-5'>
                Our aim is to make fitness accessible and achievable for everyone, no matter their fitness level. We focus on educating
                our clients and providing them with the right roadmap to success. With the right coach, fitness becomes less of a
                challenge and more of a rewarding journey.
              </p>
            </div>
            <img 
              src="/team.jpeg" 
              alt="team" 
              className='rounded-2xl w-full max-w-full h-auto object-cover'
            />
          </div>
        </div>


        <div className='flex justify-center m-11'>
          <h1 className='clip-path-animate-text animate-text lg:text-[130px] md:text-[80px] text-[50px]'>WHAT WE DO</h1>
        </div>

        <div className='flex flex-col items-center my-7'>
          <div className='md:grid hidden gap-5 w-5/6 md:grid-cols-2 lg:grid-cols-3'>
            {cardItems.map((item, index) => {
              return (
                <Card 
                  style={{ 
                    backgroundImage: `url(${item.imageUrl})`,
                  }} 
                  key={index}
                  className='relative bg-cover bg-center lg:h-[500px]'
                >
                  <div className='absolute z-0 inset-0 bg-black/60'></div>
                  <CardHeader className='relative z-10 flex items-center'>
                    <CardTitle className='md:text-[25px] lg:text-[32px] text-[20px] font-normal'>{item.title}</CardTitle>
                    <Separator className='bg-blue-500 h-[2px]'/>
                  </CardHeader>
                  <CardContent className='relative z-10'>
                    <CardDescription className='text-center text-white lg:text-[22px] md:text-[18px] text-[13px]'>
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
        
        <div className='md:hidden flex justify-center'>
          <Carousel 
            className="w-full max-w-xs"
          >
            <CarouselContent>
              {cardItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card
                      style={{ 
                        backgroundImage: `url(${item.imageUrl})`,
                      }}
                      key={index}
                      className='relative bg-cover bg-center'
                    >
                      <div className='absolute z-0 inset-0 bg-black/60'></div>
                      <CardHeader className='relative z-10 flex items-center'>
                        <CardTitle className='text-[23px] font-normal'>{item.title}</CardTitle>
                        <Separator className='bg-blue-500 h-[2px]'/>
                      </CardHeader>
                      <CardContent className="relative z-10 flex aspect-square justify-center p-6">
                      <CardDescription className='text-white text-center text-[17px]'>
                        {item.description}
                      </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <section className='main md:block hidden'>
          <div className='main-content'>
            <div className='logo'>
              <img className='img' src="/bsc-logo.png" alt="bsc logo" />
            </div>

            <div className="copy">
              <div className="line">
                <p>GET INVOLVED!</p>
              </div>
              <div className="line">
                <p>FITTER</p>
              </div>
              <div className="line">
                <p>FASTER</p>
              </div>
              <div className="line">
                <p>STRONGER</p>
              </div>
            </div>
          </div>
          {generateRows()}
        </section>
      </ReactLenis>
    </>
  );
}
