import React, { ReactNode } from 'react'
import '@/styles/dashboard.css'


const layout = ({children}: {children: ReactNode}) => {
  return (
<html lang="en">
      <body >{children}</body>
    </html>
  )
}

export default layout