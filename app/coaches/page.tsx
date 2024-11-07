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
import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Instagram } from 'lucide-react'

export const runtime = "edge"

const Coaches = () => {

  const teamItems = [
    {
      name: "Neil",
      fullName: "Neil Bester",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et viverra justo, finibus blandit erat. Aliquam dignissim, justo vel vulputate fermentum, dui sapien volutpat odio, id facilisis enim urna et risus. Fusce tincidunt magna sed dignissim sodales. Donec dignissim rutrum ipsum sed porta. Sed vitae risus varius arcu semper suscipit. Nam eu nunc dapibus, tempus ante ut, porttitor diam. Duis nec augue imperdiet, consectetur ante et, convallis tortor. Praesent malesuada metus vel turpis maximus, eu vulputate nisi finibus.Nunc ante lorem, venenatis eu mauris vitae, venenatis venenatis mauris. Sed ac dolor nec lacus sodales hendrerit. Phasellus non ante erat. Morbi consectetur a diam a venenatis. Donec pulvinar nibh tortor, in ornare elit viverra ut. Aliquam a tortor tempus, ultrices erat vel, euismod leo. Phasellus tristique urna a arcu malesuada, in semper ligula tincidunt. Cras eget tortor in eros porttitor lacinia nec sit amet sem. Cras eu venenatis orci, quis posuere ante.",
      imageUrl: '/neil-2.jpg',
      insta: 'https://www.instagram.com/neil_bester/',
    },
    {
      name: "Stacey",
      fullName: "Stacey Stewart",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et viverra justo, finibus blandit erat. Aliquam dignissim, justo vel vulputate fermentum, dui sapien volutpat odio, id facilisis enim urna et risus. Fusce tincidunt magna sed dignissim sodales. Donec dignissim rutrum ipsum sed porta. Sed vitae risus varius arcu semper suscipit. Nam eu nunc dapibus, tempus ante ut, porttitor diam. Duis nec augue imperdiet, consectetur ante et, convallis tortor. Praesent malesuada metus vel turpis maximus, eu vulputate nisi finibus.Nunc ante lorem, venenatis eu mauris vitae, venenatis venenatis mauris. Sed ac dolor nec lacus sodales hendrerit. Phasellus non ante erat. Morbi consectetur a diam a venenatis. Donec pulvinar nibh tortor, in ornare elit viverra ut. Aliquam a tortor tempus, ultrices erat vel, euismod leo. Phasellus tristique urna a arcu malesuada, in semper ligula tincidunt. Cras eget tortor in eros porttitor lacinia nec sit amet sem. Cras eu venenatis orci, quis posuere ante.",
      imageUrl: '/stacy.jpg',
      insta: 'https://www.instagram.com/stace_stew_/',
    },
  ]

  return ( 
    <div className='flex flex-col mt-10 items-center h-full'>
      <h1 className='md:text-[140px] text-[100px]'>THE TEAM</h1>
      <div className='w-full max-w-6xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {teamItems.map((item, index) => {
            return (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.0 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Dialog>
                  <DialogTrigger className='w-full'>
                  <Card
                    key={index}
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                    }}
                    className='filter flex items-end grayscale hover:filter-none cursor-pointer relative bg-cover rounded-2xl min-h-[250px] sm:min-h-[300px] md:min-h-[400px]'
                    >
                    <div className='w-full'>
                      <CardFooter className='bg-black/70 flex justify-center w-full text-[50px] p-0'>
                        {item.name}
                      </CardFooter>
                    </div>
                  </Card>
                  </DialogTrigger>
                <DialogContent>
                  <DialogHeader 
                    style={{
                      backgroundImage: `url(${item.imageUrl})`
                    }}
                    className='bg-cover rounded-xl'
                  >
                    <DialogTitle className='md:text-[140px] text-[100px] font-normal leading-none'>{item.fullName}</DialogTitle>
                  </DialogHeader>
                  <DialogDescription className='leading-none md:text-[18px] text-[15px]'>
                    {item.description}
                  </DialogDescription>
                  <CardFooter className='p-0'>
                    <Button
                      variant='ghost'
                      className='m-0 p-0 hover:bg-transparent hover:text-pink-400'
                    >
                      <a href={item.insta} 
                        className="flex"
                      >
                        <Instagram/>
                        {/* <span className="text-[17px] pl-3">Instagram</span> */}
                      </a>
                    </Button>
                  </CardFooter>
                </DialogContent>
              </Dialog>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
 
export default Coaches;
