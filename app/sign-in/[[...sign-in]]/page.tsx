import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4'>
  <SignIn 
    afterSignInUrl='/check-onboarding'
    appearance={{
      elements: {
        rootBox: 'w-full max-w-md', // Optional: controls the width of the sign-in box
      }
    }}
  />
</div>
  )
}

export default SignInPage