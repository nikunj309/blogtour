// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { useState, useEffect } from "react"
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";

// function Navbar() {
//     // const isUSerLoggedIn = true;
//     const { data: session } = useSession();
//     // const [providers, setProviders] = useState(null);    
//     const [toggleDropdown, setToggleDropdown] = useState(false);


//     // useEffect(() => {
//     //     const setUpProviders = async () => {
//     //         const response = await getProviders();
//     //         setProviders(response);
//     //     }
//     //     setUpProviders();
//     // }, [])
//     const LoggedIn = true;
//     return (
//         <nav className="flex justify-between items-center w-full mb-16 pt-3 ">
//             <Link href="/" className="flex gap-2 flex-center">
//                 <Image src="/assets/images/logo.png"
//                     alt="Logo"
//                     width={30}
//                     height={30}
//                     className="object-contain"
//                 />
//                 <p className=" logo_text">Blog</p>
//             </Link>

//             {/* Desktop navigation */}
//             <div className="sm:flex hidden">
//                 {/* {session?.user ? ( */}
//                 {LoggedIn ? (
//                     <div className="flex gap-3 md:gap-5">
//                         <Link href="/create-prompt" className="black_btn">
//                             Create Post
//                         </Link>

//                         <button type="button" onClick={signOut} className="outline_btn">
//                             Sign Out
//                         </button>

//                         <Link href="/profile">
//                             <Image src={session?.user.image}
//                                 width={37}
//                                 height={37}
//                                 alt="Profile"
//                                 className="rounded-full"
//                             />
//                         </Link>
//                     </div>
//                 ) : (
//                     <>
//                         <button type="button" onClick={() => signIn()} className="black_btn">
//                             Sign In
//                         </button>


//                     </>
//                 )}
//             </div>

//             {/* Mobile navigation */}
//             <div className=" sm:hidden flex relative">
//                 {/* {session?.user ? ( */}
//                 {LoggedIn ? (
//                     <div>
//                         <Image src={session?.user.image}
//                             width={37}
//                             height={37}
//                             alt="Profile"
//                             className="rounded-full"
//                             onClick={() => setToggleDropdown((pre) => !pre)}
//                         />

//                         {toggleDropdown && (
//                             <div className="dropdown">
//                                 <Link
//                                     href='/profile'
//                                     className='dropdown_link'
//                                     onClick={() => setToggleDropdown(false)}
//                                 >
//                                     My Profile
//                                 </Link>
//                                 <Link
//                                     href='/create-prompt'
//                                     className='dropdown_link'
//                                     onClick={() => setToggleDropdown(false)}
//                                 >
//                                     Create Prompt
//                                 </Link>
//                                 <button
//                                     type='button'
//                                     onClick={() => {
//                                         setToggleDropdown(false);
//                                         signOut();
//                                     }}
//                                     className='mt-2 w-full black_btn'
//                                 >
//                                     Sign Out
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 ) : (
//                     <>

//                         <button type="button" onClick={() => signIn()} className="black_btn">
//                             Sign In
//                         </button>


//                     </>
//                 )}
//             </div>
//         </nav>
//     )
// }

// export default Navbar

import Link from 'next/link';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import AuthLink from './AuthLink';
const Navbar = () => {
    return (
        <div className='flex items-center justify-between h-[100px]'>
            <div className='flex-1 text-center text-3xl font-bold xl:text-2xl lg:text-left'>MyBlog</div>
            {/* <div className=' gap-[10px] flex-1 hidden lg:flex'>
                <SocialIcon url="https://twitter.com/cakky" style={{ height: 24, width: 24 }} />
                <SocialIcon url="https://instagram.com/cakky" style={{ height: 24, width: 24 }} />
                <SocialIcon url="https://facebook.com/cakky" style={{ height: 24, width: 24 }} />
                <SocialIcon url="https://linkedin.com/in/cakky" style={{ height: 24, width: 24 }} />
                <SocialIcon network="pinterest" style={{ height: 24, width: 24 }} />
            </div> */}
            <div className='md:flex md:items-center md:gap-5 md:flex-1 md:text-sm xl:text-[18px] xl:gap-8 justify-end hidden'>
                <Link href='/'>Home</Link>
                <Link href='/'>Contact</Link>
                <Link href='/'>About</Link>
                <AuthLink />
            </div>
            {/* <div className='flex items-center gap-5 flex-1 text-sm xl:text-[18px] xl:gap-4 justify-end'>
            </div> */}

        </div>
    )
}

export default Navbar