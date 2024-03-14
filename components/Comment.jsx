"use client"

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import useSWR from 'swr'

const fetcher = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message)
        throw error
    }

    return data;
}

const Comment = ({ postSlug }) => {
    const [desc, setDesc] = useState("")
    const { status } = useSession();

    //With SWR, components will get a stream of data updates constantly and automatically. Thus, the UI will be always fast and reactive
    const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)

    const handleCancle = () => {
        setDesc("");
    }


    const handleSubmit = async () => {
        await fetch('/api/comments', {
            method: "POST",
            body: JSON.stringify({ desc, postSlug })
        });
        mutate()
        setDesc("");
    }

    return (
        <div className='mt-6'>
            <h1 className='mb-7 font-bold text-2xl'>Comments</h1>
            {status === "authenticated" ? (
                <div className='flex items-center justify-between flex-col  gap-3 '>
                    <textarea placeholder='write a comment...' rows={1} className=' w-full outline-none border-b-2 bg-gray-900 border-white' value={desc} onChange={e => setDesc(e.target.value)} />
                    <div className='flex self-end gap-4'>
                        <button onClick={handleCancle} className='py-[0px] h-7 hover:bg-sky-800/70 hover:text-white hover:rounded-[1rem]  px-[16px] text-white font-semibold font-boldcursor-pointer self-end'>Cancle</button>
                        <button onClick={handleSubmit} disabled={!desc} className='disabled:cursor-not-allowed disabled:bg-sky-300/60 py-[0px] h-7 px-[16px] bg-sky-800 text-white font-bold rounded-[1rem] cursor-pointer self-end'>Send</button>
                    </div>

                </div>
            ) : (
                <Link href='/login' style={{color:'rgb(255 154 99 / var(--tw-text-opacity))'}}> After login you are able to write comment</Link>
            )}
            <div className='mt-[50px]'>
                {isLoading
                    ? "Loading..."
                    : data?.map((item) => (
                        <div div className='mb-[50px]' key={item._id}>
                            <div className='flex items-center gap-5 mb-5'>
                                {item?.user?.image &&
                                    <div className='w-[50px] h-[50px] relative'>
                                        <Image
                                            src={item.user.image}
                                            alt={item.user.name}
                                            fill
                                            className='rounded-[50%] object-cover' />
                                    </div>
                                }
                                <div className='flex flex-col gap-[5px]'>
                                    <span className='text-xl font-medium'>{item.user.name}</span>
                                    <span className='text-[14px]'>{item.createdAt.substring(0, 10)}</span>
                                </div>
                            </div>
                            <p className='text-[14px] font-light'>
                                {item.desc}
                            </p>
                        </div>
                    ))
                }
                {/* <div className='mb-[50px]'>
                    <div className='flex items-center gap-5 mb-5'>
                        <div className='w-[50px] h-[50px] relative'>
                            <Image src='/nature1.jpg' alt='' fill className='rounded-[50%] object-cover' />
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <span className='text-xl font-medium'>Nikunj Dudhat</span>
                            <span className='text-[14px]'>06/09/2023</span>
                        </div>
                    </div>
                    <p className='text-[14px] font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium neque quisquam vero? Exercitationem quos voluptatem, voluptatibus molestias necessitatibus veniam esse fuga voluptate laudantium dolore nam.
                    </p>
                </div>
                <div className='mb-[50px]'>
                    <div className='flex items-center gap-5 mb-5'>
                        <div className='w-[50px] h-[50px] relative'>
                            <Image src='/nature1.jpg' alt='' fill className='rounded-[50%] object-cover' />
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <span className='text-xl font-medium'>Nikunj Dudhat</span>
                            <span className='text-[14px]'>06/09/2023</span>
                        </div>
                    </div>
                    <p className='text-[14px] font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium neque quisquam vero? Exercitationem quos voluptatem, voluptatibus molestias necessitatibus veniam esse fuga voluptate laudantium dolore nam.
                    </p>
                </div>
                <div className='mb-[50px]'>
                    <div className='flex items-center gap-5 mb-5'>
                        <div className='w-[50px] h-[50px] relative'>
                            <Image src='/nature1.jpg' alt='' fill className='rounded-[50%] object-cover' />
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <span className='text-xl font-medium'>Nikunj Dudhat</span>
                            <span className='text-[14px]'>06/09/2023</span>
                        </div>
                    </div>
                    <p className='text-[14px] font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium neque quisquam vero? Exercitationem quos voluptatem, voluptatibus molestias necessitatibus veniam esse fuga voluptate laudantium dolore nam.
                    </p>
                </div> */}
            </div>
        </div >
    )
}

export default Comment