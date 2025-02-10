import { adminSidebarLinks } from '@/constants'
import Link from 'next/link';
import React from 'react'
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className='admin-sidebar'>
        <div className='logo'>
            <h1 className=''>Scrabble</h1>
        </div>
        <div className='mt-10 flex flex-col gap-5'>
            {adminSidebarLinks.map((link) => {
                const isSelected = false;

                return (
                    <Link href={link.route} key={link.route}>
                        <div className={cn("link", isSelected && "bg-[#25388C] shadow-sm")}>
                            <div className='relative size-3'>
                                <Image  src={link.img}
                                 alt='icon'
                                fill
                                className={`${isSelected} ? 'brightness-0 invert' : 'object-contain'`}/>
                            </div>
                            <p className='text-[6px]'>{link.text}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Sidebar