import { Button } from "@/components/ui/button";
import Link from "next/link";

export const runtime = "edge"

export default function Home() {
  return (
    <>
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
    </>
  );
}
