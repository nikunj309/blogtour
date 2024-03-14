"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react'

const AuthLink = () => {
    const {status} = useSession();
    const [open, setOpen] = useState(false);
    return (
        <>
            {status === "unauthenticated" ? (
                <Link href='/login' className='hidden md:flex' >Login</Link>
            ) : (
                <>
                    <Link href='/write' className='hidden md:flex'>Write</Link>
                    <span className='hidden md:flex cursor-pointer' onClick={() => signOut()}>Logout</span>
                </>
            )
            }

            <div className='w-5 h-4 flex-col justify-between flex cursor-pointer md:hidden' onClick={() => setOpen(!open)}>
                <div className='w-full h-[2px] bg-black'></div>
                <div className='w-full h-[2px] bg-black'></div>
                <div className='w-full h-[2px] bg-black'></div>
            </div>
            {open && (
                <div className='absolute top-[100px] left-0 bg-white w-full flex flex-col items-center justify-center gap-12 h-[calc(100vh - 100px)] text-3xl z-[999]'>
                    <Link href="/">Homepage</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    {status === "notauthenticated" ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <Link href="/write">Write</Link>
                            <span className="hidden md:flex">Logout</span>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default AuthLink