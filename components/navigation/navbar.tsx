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
import { ChevronDown, Instagram, Mail, Menu } from "lucide-react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { usePathname } from "next/navigation";
import Image from 'next/image'
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const navItems = [
    {
      path: "/",
      name: "HOME"
    },
    {
      path: "/online-training",
      name: "ONLINE TRAINING"
    },
    {
      path: "/page",
      name: "PAGE"
    }, {
      path: "/location",
      name: "PAGE"
    }
  ]

  if (!isMounted) {
    return null;
  }

  const message = "Hi there,\nI am interested in training at BSC!\nPlease give me more information."
  const phoneNumber = "27632698205"
  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const email = "info@bacza.co.za"
  const subject = "Inquiry About Your Services"
  const body = "Hi there,\nI am interested in training at BSC!\nPlease give me more information."

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  let pathname = usePathname() || "/"

  // fixed z-20 bg-black top-3 left-1/2 transform -translate-x-1/2 flex w-5/6 items-center text-[16px]text-white p-4 justify-between border border-neutral-500 rounded-[15px]

  return (
      <div className={cn("z-20 bg-black top-3 flex w-5/6 items-center text-[16px] text-white p-4 justify-between border border-neutral-500 rounded-[15px]",
        pathname === '/' ? "fixed left-1/2 transform -translate-x-1/2" : "sticky mx-auto"
      )}>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant='ghost'
              >
                <Menu size={32} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black text-white rounded-none border-none">
            <div>
              {navItems.map((item, index) => {
                const isActive = item.path === pathname;

                return(
                  <DropdownMenuItem>
                    <Link 
                      key={item.path}
                      href={item.path}
                      className={`px-2 hover:text-[#0078e6] ${isActive ? "text-[#0078e6]": ""}`}
                    >
                      {item.name}
                    </Link>
                    {index < navItems.length - 1 ? <DropdownMenuSeparator className="h-5"/>: <></>}
                  </DropdownMenuItem>
                )
              })}
            </div>

            </DropdownMenuContent>
          </DropdownMenu>
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
                {index < navItems.length - 1 ? <Separator orientation="vertical" className="h-6"/>: <></>}
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