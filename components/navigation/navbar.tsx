'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react"
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "../ui/dropdown-menu";
import { BookOpen, ChevronDown, Dumbbell, House, Instagram, Mail, Menu } from "lucide-react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { usePathname } from "next/navigation";
import Image from 'next/image'
import { cn } from "@/lib/utils";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";

const Navbar = () => {
  let pathname = usePathname() || "/"
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const navItems = [
    {
      path: "/",
      name: "HOME",
      icon: <House size={29}/>
    },
    {
      path: "/online-training",
      name: "ONLINE TRAINING",
      icon: <Dumbbell size={29}/>
    },
    {
      path: "/page",
      name: "PAGE",
      icon: <BookOpen size={29}/>
    }, {
      path: "/location",
      name: "PAGE",
      icon: <BookOpen size={29}/>
    }
  ]

  if (!isMounted) {
    return null;
  }

  const message = "Hi there,\nI am interested in training at BSC!\nPlease give me more information."
  const phoneNumber = process.env.PHONE_NUMBER
  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const email = process.env.EMAIL
  const subject = "Inquiry About Your Services"
  const body = "Hi there,\nI am interested in training at BSC!\nPlease give me more information."

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`


  // fixed z-20 bg-black top-3 left-1/2 transform -translate-x-1/2 flex w-5/6 items-center text-[16px]text-white p-4 justify-between border border-neutral-500 rounded-[15px]

  return (
      <div className={cn("z-20 bg-black top-3 flex w-5/6 items-center text-[16px] text-white p-4 justify-between border border-neutral-500 rounded-[15px]",
        pathname === '/' ? "fixed left-1/2 transform -translate-x-1/2" : "sticky mx-auto"
      )}>
        <div className="md:hidden">
          <Drawer direction="right">
            <DrawerTrigger>
              <Button
                variant='ghost'
              >
                <Menu size={32} />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="flex justify-center">
                  <Image 
                    src="/bsc-logo.png"
                    alt="BSC logo"
                    width={110}
                    height={0}
                    className="md:w-[110px] w-[60px]"
                  />
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col">
                {navItems.map((item, index) => {
                  const isActive = item.path === pathname;
                  
                  return(
                    <>
                      <Link 
                        key={item.path}
                        href={item.path}
                        className={`hover:text-[#0078e6] text-[30px] ${isActive ? "text-[#0078e6]": ""}`}
                      >
                        <div className="flex">
                          <span className="mb-7 px-2 pt-[10px]">{item.icon}</span>
                          <span>{item.name}</span>
                        </div>
                      </Link>
                    </>
                  )
                })}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="md:flex hidden">
          {navItems.map((item, index) => {
            const isActive = item.path === pathname;

            return(
              <>
                <Link 
                  key={item.path}
                  href={item.path}
                  className={`px-2 hover:text-[#0078e6] ${isActive ? "text-[#0078e6]": ""}`}
                >
                  {item.name}
                </Link>
                {index < navItems.length - 1 ? <Separator orientation="vertical" className="h-6 bg-white"/>: <></>}
              </>
            )
          })}
        </div>
        <div>
          <Link
            href='/' 
          >
            <Image 
              src="/bsc-logo.png"
              alt="BSC logo"
              width={110}
              height={0}
              className="md:w-[110px] w-[60px]"
            />
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant='bsc'
              className="md:text-[16px] text-[13px]"
            >
              CONTACT US
              <ChevronDown size={18}/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuItem>
              <Button
                variant='ghost'
              >
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
                  <WhatsAppIcon className="text-green-500"/>
                  <span className="text-[17px] pl-2">WhatsApp</span>
                </a>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button
                variant='ghost'
              >
                <a href={mailtoUrl} 
                  className="flex"
                >
                  <Mail color="#3d87ff"/>
                  <span className="text-[17px] pl-3">Email</span>
                </a>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button
                variant='ghost'
              >
                <a href="https://www.instagram.com/bsc_za/" 
                  className="flex"
                >
                  <Instagram className="text-pink-600"/>
                  <span className="text-[17px] pl-3">Instagram</span>
                </a>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
  );
}
 
export default Navbar;