"use client"

import React, { useRef } from 'react'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll } from "framer-motion"
import { useEffect } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis } from "lenis/react"
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
      const cardLeft = row.querySelector(".card-left")
      const cardRight = row.querySelector(".card-right")

      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeft.style.transform = `translateX(${
              progress * leftXValues[index]
            }px translateY${progress * yValues[index]}px rotate(${
              progress * leftRotationValues[index]
            }deg)`
          }
        }
      })

      gsap.to(cardRight, {
        x: rightXValues[index],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardRight.style.transform = `translateX(${
              progress * rightXValues[index]
            }px translateY${progress * yValues[index]}px rotate(${
              progress * rightRotationValues[index]
            }deg)`
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

    gsap.to(".button", {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }

  }, [])

  const generateRows = () => {
    const rows = []
    //photo-${2*i-1}.png
    //photo-${2*i}.png
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <img className='img' src={`/placeholder.jpg`} alt="" />
          </div>
          <div className="card card-right">
            <img className='img' src={`/placeholder.jpg`} alt="" />
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
      imageUrl: "/photo-1.jpg"
    },
    {
      title: "Program Communities",
      description: "Integrate yourself into the community. We will make you part of your program’s community, where you can share and ask anything within the group. Ask questions, share your progress, throw some high fives, it’s all possible!",
      imageUrl: "/photo-4.jpg"
    },
    {
      title: "1-2-1 Chat",
      description: "Our dedicated messenger service will let you share your performances, direct from your training calendar, to your coach, and chat 1-2-1 about anything on your mind.",
      imageUrl: "/photo-1.jpg"
    },
    {
      title: "Customisable Benchmark Tracker",
      description: "Track an unlimited amount of benchmarks. Link media to each performance and see your progression over time. Share benchmarks to your coach for feedback.",
      imageUrl: "/photo-1.jpg"
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
            <Button
              variant='bsc'
              className="mt-4 text-[19px]"
              size='lg'
            >
              <Link
                href='/online-training'
              >
              LEARN MORE
              </Link>
            </Button>
          </div>
        </div>

        <div className='flex flex-col items-center mt-7'>
          <div className='grid grid-cols-1 gap-5 w-5/6 lg:grid-cols-2'>
            {cardItems.map((item, index) => {
              return (
              <>
              
                <div key={index} className='md:inline hidden'>
                  {index % 2 == 0 ? (
                    <>
                      <motion.div
                        initial={{ x: -600, opacity: 0, rotate: -30}}
                        whileInView={{ x: 0, opacity: 1, rotate: 0, transition: { duration: 1 }}}
                        viewport={{ once: true }}
                      >
                        <Card 
                          style={{ 
                            backgroundImage: `url(${item.imageUrl})`,
                          }} 
                          key={index}
                          className='relative bg-cover bg-center h-[700px] mb-[100px]'
                        >
                          <div className='absolute z-10 right-0 left-0 bottom-0 top-0 bg-black/30'></div>
                        </Card>
                      </motion.div>
                      <motion.div
                        className='mb-[100px]'
                      >
                        <Card className='flex flex-col border-none justify-center h-full'>
                          <CardHeader className='flex items-center'>
                            <CardTitle className='md:text-[25px] lg:text-[60px]'>{item.title}</CardTitle>
                            <Separator className='bg-blue-500 h-[2px]'/>
                          </CardHeader>
                          <CardContent className='flex text-center'>
                            <CardDescription className='text-white md:text-[40px]'>
                              {item.description.split(" ").map((el, i) => (
                                <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: { duration: 0.25, delay: i / 20 }}}
                                viewport={{ once: true }}
                                key={i}
                              >
                                {el}{" "}
                              </motion.span>
                              ))}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        className='mb-[100px]'
                      >
                        <Card className='flex flex-col border-none justify-center h-full'>
                          <CardHeader className='flex items-center'>
                            <CardTitle className='md:text-[25px] lg:text-[60px] text-[20px]'>{item.title}</CardTitle>
                            <Separator className='bg-blue-500 h-[2px]'/>
                          </CardHeader>
                          <CardContent className='flex text-center'>
                            <CardDescription className='text-white md:text-[40px] text-[14px]'>
                              {item.description.split(" ").map((el, i) => (
                                <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: { duration: 0.25, delay: i / 20 }}}
                                viewport={{ once: true }}
                                key={i}
                              >
                                {el}{" "}
                              </motion.span>
                              ))}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </motion.div>
                      <motion.div
                        initial={{ x: 600, opacity: 0, rotate: 30}}
                        whileInView={{ x: 0, opacity: 1, rotate: 0, transition: { duration: 1 }}}
                        viewport={{ once: true }}
                      >
                        <Card 
                          style={{ 
                            backgroundImage: `url(${item.imageUrl})`,
                          }} 
                          key={index}
                          className='relative bg-cover bg-center h-[700px] mb-[100px]'
                        >
                          <div className='absolute z-10 right-0 left-0 bottom-0 top-0 bg-black/30'></div>
                        </Card>
                      </motion.div>
                    </>
                  )}
                </div>
                <div className='md:hidden inline'>
                  <motion.div
                    initial={{ x: 300, opacity: 0, rotate: 30}}
                    whileInView={{ x: 0, opacity: 1, rotate: 0, transition: { duration: 1 }}}
                    viewport={{ once: true }}
                  >
                    <Card 
                      style={{ 
                        backgroundImage: `url(${item.imageUrl})`,
                      }} 
                      key={index}
                      className='relative bg-cover bg-center h-[300px] mb-[20px]'
                    >
                      <div className='absolute z-10 right-0 left-0 bottom-0 top-0 bg-black/30'></div>
                    </Card>
                  </motion.div>
                  <motion.div
                    className='mb-[100px]'
                  >
                    <Card className='flex flex-col border-none justify-center h-full'>
                      <CardHeader className='flex items-center'>
                        <CardTitle className='text-[20px]'>{item.title}</CardTitle>
                        <Separator className='bg-blue-500 h-[2px]'/>
                      </CardHeader>
                      <CardContent className='flex text-center'>
                        <CardDescription className='text-white text-[17px]'>
                          {item.description.split(" ").map((el, i) => (
                            <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 0.25, delay: i / 20 }}}
                            viewport={{ once: true }}
                            key={i}
                          >
                            {el}{" "}
                          </motion.span>
                          ))}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </>
              )
            })}
          </div>
        </div>

        <section className='main'>
          <div className='main-content'>
            <div className='logo'>
              <img className='img' src="/bsc-logo.png" alt="bsc logo" />
            </div>

            <div className="copy">
              <div className="line">
                <p>Get stuck in!</p>
              </div>
              <div className="line">
                <p>Follow us @</p>
              </div>
            </div>
          </div>
          {generateRows()}
        </section>
      </ReactLenis>
    </>
  );
}
