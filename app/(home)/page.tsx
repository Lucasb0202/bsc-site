import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        <video 
          className='absolute top-0 left-0 w-full h-full object-cover'
          src="/videoBg.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <p className="text-white text-5xl font-bold text-center px-8">
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
