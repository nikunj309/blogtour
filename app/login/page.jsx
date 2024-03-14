"use client"

import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter()

  if (status === "loading") {
    return <div>Loading...</div>
  }
  if (status === "authenticated") {
    router.push("/")
  }
  return (
    <div className='flex items-center justify-center mt-[60px]'>
      <div className='lg:py-[100px] lg:px-[150px] p-7 md:py-12 md:px-[100px] flex flex-col gap-[50px] rounded-[10px] bg-gray-600'>
        <div className='login_btn' style={{ backgroundColor: '#ff5555' }} onClick={() => signIn("google")}>Sign in with Google</div>
        <div className='login_btn' style={{ backgroundColor: '#111' }}>Sign in with Github</div>
        <div className='login_btn' style={{ backgroundColor: '#087BEA' }}>Sign in with Facebook</div>
      </div>
    </div>
  )
}

export default LoginPage