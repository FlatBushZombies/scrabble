import { navLinks } from '@/constants'
import { li } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import CustomButton from './CustomButton'

const NavBar = () => {
  return (
       <nav className='flex items-center justify-between mx-auto max-w-[1440px] px-6 relative '>
           <Link href='/' className='cursor-pointer'>
            <Image src='/assets/logo.png' alt='logo' width={48} height={48} className='object-cover' />
            </Link>
            <ul className='h-full gap-12 flex'>
            { navLinks.map(({id, url, item}) => (
               <Link href={url} key={id} className="flex regular-16 text-black items-center justify-center
               cursor-pointer pb-1.5 transition-all hover:font-bold">
                   {item}
               </Link>
            ))}
            </ul>
            <div className='flex items-centerjustify-center'>
              <Link href='/dashboard' className='bg-[#FCAD55] text-white px-6 py-2 rounded-lg hover:bg-[#FCAD55] flex space-x-6 btn_orange'>
              Go to Dashboard
              </Link>
            </div>
        </nav>
  )
}

export default NavBar