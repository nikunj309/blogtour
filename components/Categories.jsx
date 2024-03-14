import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/categories', {
        cache: "no-store"
    })
    if (!res.ok) {
        throw new Error("Failed")
    }
    return res.json();
}

const Categories = async ({cat}) => {
    const data = await getData();

    return (
        <div>
            <h1 className='mt-12 mb-2 text-2xl font-semibold'>Popular Categories</h1>
            <div className='flex flex-wrap justify-between gap-5'>
                {data.map((item) => (
                    <Link
                        href={`blog?cat=${item.slug}`}
                        key={item._id}
                        className={`categories_card ${item.slug}`}
                    >
                        {/* {item.img && (
                            <Image
                                src={item.img}
                                alt='categories'
                                width={22}
                                height={22}
                                className='rounded-[50%]'
                            />
                        )} */}

                        <span className='text-xl'>{item.title}</span>
                    </Link>
                ))}

                {/* <Link href="blog?cat=style" className='flex items-center gap-[10px] w-full md:w-[45%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%] h-[80px] justify-center rounded-[10px] bg-[#eb57ff31]'>
                    <Image
                        src="/style.png"
                        alt=''
                        width={26}
                        height={26}
                        className='rounded-[50%]'
                    />
                    style
                </Link>
                <Link href="blog?cat=style" className='flex items-center gap-[10px] w-full md:w-[45%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%] h-[80px] justify-center rounded-[10px] bg-[#ae57ff31]'>
                    <Image
                        src="/style.png"
                        alt=''
                        width={26}
                        height={26}
                        className='rounded-[50%]'
                    />
                    style
                </Link>
                <Link href="blog?cat=style" className='flex items-center gap-[10px] w-full md:w-[45%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%] h-[80px] justify-center rounded-[10px] bg-[#d0a1334d]'>
                    <Image
                        src="/style.png"
                        alt=''
                        width={26}
                        height={26}
                        className='rounded-[50%]'
                    />
                    style
                </Link>
                <Link href="blog?cat=style" className='flex items-center gap-[10px] w-full md:w-[45%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%] h-[80px] justify-center rounded-[10px] bg-[#ff57624d]'>
                    <Image
                        src="/style.png"
                        alt=''
                        width={26}
                        height={26}
                        className='rounded-[50%]'
                    />
                    style
                </Link>
                <Link href="blog?cat=style" className='flex items-center gap-[10px] w-full md:w-[45%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%] h-[80px] justify-center rounded-[10px] bg-[#bfff5767]'>
                    <Image
                        src="/style.png"
                        alt=''
                        width={26}
                        height={26}
                        className='rounded-[50%]'
                    />
                    style
                </Link> */}


            </div>
        </div>
    )
}

export default Categories