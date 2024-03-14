'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

const BlogCard = ({ blog: { title, desc, img } }) => {
    const isLiked = true;
    return (
        <div className="w-[23%] h-[540px] transition-[150ms] rounded-[12px] shadow-md">
            <div className='p-5 w-full h-full flex flex-col'>
                <Link className="object-cover rounded-[20px] w-full m-0" href='/'>
                    <Image src={img} width="350" height="350" />
                </Link>
                <div className='ml-3 flex justify-between items-center'>
                    <div>
                        <h3 className='text-3xl font-bold mt-6 mb-5'>{title}</h3>
                        <p className='text-[#666]'>{desc}</p>
                        <span className='mt-8 flex items-center gap-2 text-base text-[#777]'>Created By: <span>1th of January</span></span>
                    </div>
                    <div className='text-2xl cursor-pointer flex items-center gap-2'>
                        {12} {" "} {isLiked
                            ? (<AiFillLike  size={20} />)
                            : (<AiOutlineLike  size={20} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard