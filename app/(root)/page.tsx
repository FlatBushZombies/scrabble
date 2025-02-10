import Hero from '@/components/Hero'
import React from 'react'
import Demo from '../../components/Demo'
import NavBar from '@/components/NavBar'
import Features from '@/components/Features'


const page = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Demo />
      <Features />
    </div>
  )
}

export default page