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
import { ChevronDown, Mail } from "lucide-react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { usePathname } from "next/navigation";
import Image from 'next/image'

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
      name: "LOCATION"
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

  return (
      <div className="fixed z-20 bg-black top-3 left-1/2 transform -translate-x-1/2 flex w-5/6 items-center text-[16px] text-white p-4 justify-between border border-neutral-500 rounded-[15px]">
        <div className="flex">
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
          />
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant='bsc'
              className="text-[16px]"
            >
              CONTACT US
              <ChevronDown  size={18}/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
  );
}
 
export default Navbar;