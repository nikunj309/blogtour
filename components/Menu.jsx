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

const Menu = async () => {
    const data = await getData();
    return (
        <div className='md:flex-[2] md:mt-[60px] lg:inline-block hidden'>
            <h2 className='text-gray-500 text-base font-normal' style={{ color: 'rgb(255 154 99 / var(--tw-text-opacity))' }}>hot content</h2>
            <h1 className='text-[28px]'>Popular Blog</h1>
            <div className='mt-[35px] mb-[60px] flex flex-col gap-[35px]'>
                <Link href='/' className='flex items-center gap-5'>
                    <div className='flex-1 relative aspect-square'>
                        <Image src={'http://res.cloudinary.com/dz2xtd4vs/image/upload/v1699762548/o18fmhfecz2ersokbbvq.jpg'} alt='' fill className='rounded-[50%] border-[3px] border-solid border-gray-300 object-cover' />
                    </div>
                    <div className='flex-[4] flex flex-col gap-[5px]'>
                        <span className='w-max pt-[3px] pb-[3px] pr-[8px] pl-[8px] bg-orange-500 rounded-[1rem] text-xs'>technology</span>
                        <h3 className='text-lg font-medium'>How Internet Exchange Points are Expanding and ...</h3>
                        <div className='text-xs'>
                            <span>
                            Black Devil
                            </span>
                            <span className='text-gray-400'> - 2023/11/12</span>
                        </div>

                    </div>
                </Link>
                <Link href='/' className='flex items-center gap-5'>
                    <div className='flex-1 relative aspect-square'>
                        <Image src={'http://res.cloudinary.com/dz2xtd4vs/image/upload/v1699704730/irboixcz0hk9prsabsha.jpg'} alt='' fill className='rounded-[50%] border-[3px] border-solid border-gray-300 object-cover' />
                    </div>
                    <div className='flex-[4] flex flex-col gap-[5px]'>
                        <span className='w-max pt-[3px] pb-[3px] pr-[8px] pl-[8px] bg-orange-500 rounded-[1rem] text-xs'>food</span>
                        <h3 className='text-lg font-medium'>House Favorite Garlic Bread.</h3>
                        <div className='text-xs'>
                            <span>
                            Black Devil
                            </span>
                            <span className='text-gray-400'> - 2023/11/11</span>
                        </div>

                    </div>
                </Link>
                <Link href='/' className='flex items-center gap-5'>
                    <div className='flex-1 relative aspect-square'>
                        <Image src={'http://res.cloudinary.com/dz2xtd4vs/image/upload/v1699705345/jztrrbxsyid4losko0cg.jpg'} alt='' fill className='rounded-[50%] border-[3px] border-solid border-gray-300 object-cover' />
                    </div>
                    <div className='flex-[4] flex flex-col gap-[5px]'>
                        <span className='w-max pt-[3px] pb-[3px] pr-[8px] pl-[8px] bg-orange-500 rounded-[1rem] text-xs'>code</span>
                        <h3 className='text-lg font-medium'>How Algorithmic Trading Systems Work.</h3>
                        <div className='text-xs'>
                            <span>
                            Black Devil
                            </span>
                            <span className='text-gray-400'> - 2023/11/11</span>
                        </div>

                    </div>
                </Link>
                <Link href='/' className='flex items-center gap-5'>
                    <div className='flex-1 relative aspect-square'>
                        <Image src={'http://res.cloudinary.com/dz2xtd4vs/image/upload/v1699706173/lh6wdkudvr9ihkwxdhut.jpg'} alt='' fill className='rounded-[50%] border-[3px] border-solid border-gray-300 object-cover' />
                    </div>
                    <div className='flex-[4] flex flex-col gap-[5px]'>
                        <span className='w-max pt-[3px] pb-[3px] pr-[8px] pl-[8px] bg-orange-500 rounded-[1rem] text-xs'>fashion</span>
                        <h3 className='text-lg font-medium'>Step Into Style: The Ultimate Guide to Elevating ...</h3>
                        <div className='text-xs'>
                            <span>
                                Black Devil
                            </span>
                            <span className='text-gray-400'> - 2023/11/11</span>
                        </div>

                    </div>
                </Link>

            </div>
            <h2 className='text-gray-500 text-base font-normal' style={{ color: 'rgb(255 154 99 / var(--tw-text-opacity))' }}>Discover by topics</h2>
            <h1 className='text-[28px]'>Categories</h1>
            <div className='mt-9 mb-[60px] flex flex-wrap gap-[20px]'>
                {data.map((item) => (
                    <Link
                        href={`blog?cat=${item.slug}`}
                        key={item._id}
                        className={`pt-[10px] pb-[10px] pr-[25px] pl-[25px] rounded-[10px] text-sm ${item.slug}`}>
                        {item.title}
                    </Link>
                ))}

                {/* <Link href='/bog?cat=fashion' className='pt-[10px] pb-[10px] pr-[25px] pl-[25px] rounded-[10px] text-sm bg-[#eb57ff31]'>
                    fashion
                </Link>
                <Link href='/bog?cat=jobs' className='pt-[10px] pb-[10px] pr-[25px] pl-[25px] rounded-[10px] text-sm bg-[#ae57ff31]'>
                    jons
                </Link>
                <Link href='/bog?cat=code' className='pt-[10px] pb-[10px] pr-[25px] pl-[25px] rounded-[10px] text-sm bg-[#d0a1334d]'>
                    code
                </Link>
                <Link href='/bog?cat=technology' className='pt-[10px] pb-[10px] pr-[25px] pl-[25px] rounded-[10px] text-sm bg-[#ff57624d]'>
                    technology
                </Link>
                <Link href='/bog?cat=food' className='pt-[10px] pb-[10px] pr-[25px] pl-[25px] rounded-[10px] text-sm bg-[#bfff5767]'>
                    food
                </Link> */}
            </div>
        </div>
    )
}

export default Menu