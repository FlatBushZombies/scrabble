import React from 'react'
import Image from 'next/image'
import dayjs from "dayjs"





const WorkFlowCard = ({id, title, description, steps, likes, comments}: WorkFlowProps) => {
  return (
 
      <div className='card-border w-[360px] max-sm:w-full min-h-96'>
        <div className='card-workflow'>
          <div>
          <div className='absolute top-0 right-0 w-fit px-6 bg-light-600'>
            <p className="badge-text">{title}</p>
          </div>
          <Image src="/assets/profiles/mark-erixon.png"  alt='user' height={45} width={45} className='rounded-full object-fit ' />
          <p className='text-white'>{description}</p>
          <div className='flex flex-row gap-5 mt-3'>
            <div className='flex flex-row gap-2 items-center'>
              <Image src="/star.svg" alt='star' width={22} height={22} />
              <p className='text-white'>{likes}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default WorkFlowCard