import React from 'react';
import AnimatedGridPattern from './ui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import AvatarCircles from './ui/avatar-circles';
import CustomButton from './CustomButton';
import WordRotate from './ui/word-rotate';

const avatars = [
  {
    imageUrl: "/assets/profiles/alicia-barker.png",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "/assets/profiles/becky-snider.png",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "/assets/profiles/jessica-saunders.png",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "/assets/profiles/jim-bradley.png",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "/assets/profiles/mark-erixon.png",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "/assets/profiles/melanie-hurst.png",
    profileUrl: "https://github.com/itsarghyadas",
  },
];


const Hero = () => {
  return (
    <section className="text-center py-20 px-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Discover, Create, <span className="text-orange-500">Collaborate</span>
      </h1>
    <AnimatedGridPattern
      numSquares={30}
      maxOpacity={0.1}
      duration={3}
      repeatDelay={1}
      className={cn(
        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
      )}
    />
     <p className='text-lg text-gray-600 mt-4'>Choosing the right AI tools is essential for staying competitive.
       With our platform, you can make data-driven decisions to maximize your AI investment.
        We offer detailed, real-time insights into the performance, cost, and efficiency of the most popular AI tools on the market.
         Here's how we help:</p>
       <div className='mt-8 flex justify-center space-x-4'>
       
        <CustomButton
        type='button'
        title='Start now'
         />
         <CustomButton
        type='button'
        title='Contact sales'
         />
         
      </div>
      <div className='mt-8 flex flex-row text-center justify-center'>
      <AvatarCircles numPeople={99} avatarUrls={avatars} />
         <div className='mr-2'>
          <WordRotate
          className='text-[14px] justify-center'
          words={["Creators", "Researchers", "Educators", "Students", 'Leaders']}
           />
          </div>
         </div>
  </section>
  
);
  
}

export default Hero