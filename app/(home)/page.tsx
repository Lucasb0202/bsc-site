"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis } from "lenis/react"

export const runtime = "edge"

// gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  // useEffect(() => {
  //   const scrollTriggerSettings = {
  //     trigger: ".main",
  //     start: "top 25%",
  //     toggleActions: "play reverse play reverse"
  //   }

  //   const leftXValues = [-800, -900, -400]
  //   const rightXValues = [800, 900, 400]
  //   const leftRotationValues = [-30, -20, -35]
  //   const rightRotationValues = [30, 20, 35]
  //   const yValues = [100, -150, -400]

  //   gsap.utils.toArray(".row").forEach((row, index) => {
  //     const cardLeft = row.querySelector(".card-left")
  //     const cardRight = row.querySelector(".card-right")

  //     gsap.to(cardLeft, {
  //       x: leftXValues[index],
  //       scrollTrigger: {
  //         trigger: ".main",
  //         start: "top center",
  //         end: "150% bottom",
  //         scrub: true,
  //         onUpdate: (self) => {
  //           const progress = self.progress;
  //           cardLeft.style.transform = `translateX(${
  //             progress * leftXValues[index]
  //           }px translateY${progress * yValues[index]}px rotate(${
  //             progress * leftRotationValues[index]
  //           }deg)`

  //           cardRight.style.transform = `translateX(${
  //             progress * rightXValues[index]
  //           }px translateY${progress * yValues[index]}px rotate(${
  //             progress * rightRotationValues[index]
  //           }deg)`
  //         }
  //       }
  //     })
  //   })

  //   gsap.to(".logo", {
  //     scale: 1,
  //     duration: 0.5,
  //     ease: "power1.out",
  //     scrollTrigger: scrollTriggerSettings,
  //   })

  //   gsap.to(".line p", {
  //     y: 0,
  //     stagger: 0.1,
  //     duration: 0.5,
  //     ease: "power1.out",
  //     scrollTrigger: scrollTriggerSettings,
  //   })

  //   gsap.to(".button", {
  //     y: 0,
  //     opacity: 1,
  //     delay: 0.25,
  //     duration: 0.5,
  //     ease: "power1.out",
  //     scrollTrigger: scrollTriggerSettings,
  //   })

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  //   }

  // }, [])

  const generateRows = () => {
    const rows = []
    //photo-${2*i-1}.png
    //photo-${2*i}.png
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <img src={`/placeholder.jpg`} alt="" />
          </div>
          <div className="card card-right">
            <img src={`/placeholder.jpg`} alt="" />
          </div>
        </div>
      )
    }
    return rows
  }

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

        {/* <section className='main'>
          <div className='main-content'>
            <div className='logo'>
              <img src="/bsc-logo.png" alt="bsc logo" />
            </div>

            <div className="copy">
              <div className="line">
                <p>Join the community</p>
              </div>
              <div className="line">
                <p>and see what we are up to!</p>
              </div>
            </div>

            <div className='btn'>
              <button>GET PRO</button>
            </div>
          </div>

          {generateRows()}
        </section> */}
      </ReactLenis>
    </>
  );
}
