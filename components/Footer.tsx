import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src="/window.svg"
        alt="Window icon"
        width={16}
        height={16}
      />
      Learn More
    </a>
    <a
      className="flex items-center gap-2 rounded-full hover:underline hover:underline-offset-4"
      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src="/play-circle.svg"
        alt="Window icon"
        width={16}
        height={16}
      />
      Watch Demo
    </a>
        {/* Footer Placeholder */}
        <footer className="w-full text-center text-gray-500">
        © {new Date().getFullYear()} Scrabble. All rights reserved.
      </footer>

  </footer>
  )
}

export default Footer