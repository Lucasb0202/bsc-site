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

export const runtime = "edge"

const Coaches = () => {

  return ( 
    // <>
    //   <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
    //       <div className='flex justify-center'>
    //         {/* //Next image */}
    //         <img 
    //           src="/coach-2.png" 
    //           alt="coach" 
    //           className='rounded-2xl object-contain w-4/5 md:w-auto'
    //         />
    //       </div>
    //       <Card className='border-none rounded-none w-full'>
    //         <CardHeader className=''>
    //           <CardTitle className='text-[40px] md:text-[55px] lg:text-[72px] font-normal'>NEIL BESTER</CardTitle>
    //           <Separator className='bg-blue-500 h-[2px] w-1/2'/>
    //         </CardHeader>
    //         <CardContent className=''>
    //           <p className='leading-4 md:leading-6 lg:leading-8 lg:w-5/6 text-white text-[12px] md:text-[16px] lg:text-[21px]'>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    //             Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
    //             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br><br></br>
    //             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    //             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br><br></br>
    //             Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, 
    //             est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. 
    //             Pretium ac, nisi. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, 
    //             nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Pretium ac, nisi.
    //           </p>
    //         </CardContent>
    //       </Card>
    //     </div>
    // </>
    <></>
  );
}
 
export default Coaches;
