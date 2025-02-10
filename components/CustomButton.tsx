

import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ButtonProps {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant?: string;
    full?: boolean;
}

const CustomButton = ({type, title, icon, variant, full}: ButtonProps) => {
  
  return (
    <button
    className={`bg-[#FCAD55] text-white px-6 py-2 rounded-lg hover:bg-[#FCAD55] flex space-x-6 ${variant}`}
     type={type}
     >
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className="whitespace-nowrap cursor-pointer text-[12px]">{title}</label>
    </button>
  )
}

export default CustomButton