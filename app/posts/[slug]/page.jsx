import Comment from '@/components/Comment'
import Menu from '@/components/Menu'
import Image from 'next/image'
import React from 'react'

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        cache: "no-store"
    })
    if (!res.ok) {
        throw new Error("Failed")
    }
    return res.json();
}


const SinglePage = async ({ params }) => {
    const { slug } = params;
    const data = await getData(slug);
    return (
        <div>
            <div className='flex items-center gap-[50px]'>
                <div className='flex-1'>
                    <h1 className='text-[36px] xl:text-5xl 2xl:text-[54px] mb-12'>{data?.title}</h1>
                    <div className='flex items-center gap-5'>
                        {data?.user?.image && (
                            <div className='w-[50px] h-[50px] relative'>
                                <Image src={data.user.image} alt='' fill className='rounded-[50%] object-cover' />
                            </div>
                        )
                        }
                        <div className='flex flex-col gap-[5px]'>
                            <span className='text-xl font-medium'>{data?.user.name}</span>
                            <span>{data.createdAt.slice(0,10)}</span>
                        </div>
                    </div>
                </div>
                {data?.img && (
                    <div className='lg:flex-1 lg:h-[350px] lg:relative lg:inline-block hidden'>
                        <Image src={data.img} fill alt='' className='object-cover' />
                    </div>
                )}

            </div>
            <div className='flex gap-[50px]'>
                <div className='flex-[5] mt-14'>
                    <div className='text-xl font-normal mb-5' dangerouslySetInnerHTML={{ __html: data?.desc }} />
                    <div>
                        <Comment postSlug={slug}/>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage