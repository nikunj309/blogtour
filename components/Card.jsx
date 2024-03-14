import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ item, key }) => {
    return (
        // <div key={key} className='flex flex-wrap justify-center  max-w[1200px] mb-8 gap-8'>
        //     <div style={{ width: 'clamp(20rem,calc(20rem + 2vw),22rem)' }} className='flex flex-col overflow-hidden rounded-[1em] shadow-[0 .1rem 1rem rgba(0, 0, 0, 0.1)] bg-[#ECE9E6]'>
        //         {item.img && (
        //             <div>
        //                 <Image src={item.img} alt='' width={500} height={500} className='max-w[100%] block object-cover' />
        //             </div>
        //         )}
        //         <div className='p-4 flex flex-col gap-[.5rem]'>
        //             <span className='self-start p-1 text-xs ml-2 bg-[#D1913c] rounded-[1rem]'>{item.catSlug}</span>
        //             <Link href={`/posts/${item.slug}`}>
        //                 <h4 className='text-2xl capitalize'>{item.title}</h4>
        //             </Link>

        //             <p>{item.desc.substring(0, 60)}</p>
        //             <Link href={`/posts/${item.slug}`} className='w-max border-b-2 border-solid border-red-600 pt-[2px] pb-[0px]'>Read more</Link>
        //         </div>
        //         <div className='flex p-4 mt-auto'>
        //             <div className='flex'>
        //                 <div className='text-[#666]'>{item.createdAt.substring(0, 10)}</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        // <div key={key} className='flex flex-wrap justify-center  max-w[1200px] mb-8 gap-8'>
        //     <div className='flex flex-col overflow-hidden '>
        //         {item.img && (
        //             <div >
        //                 <Image src={item.img} alt='' width={350} height={350} className='rounded-3xl md:w-[200] md:h-[200] max-w[100%] object-cover block' />
        //             </div>
        //         )}
        //         <div className='p-4 flex flex-col gap-[.3rem]'>
        //             <span className='self-start p-1 text-sm  px-5 bg-[#D1913c] text-violet-500 rounded-[1rem]'>{item.catSlug}</span>
        //             <Link href={`/posts/${item.slug}`}>
        //                 <h4 className='text-base capitalize'><span className='font-semibold'>{item.title.substring(0, 30)}</span>:{item.desc.substring(0, 60)}...</h4>
        //                 {/* {item.desc.substring(0, 60)} */}
        //                 {/* <p>{item.desc.substring(0, 60)}</p> */}
        //             </Link>

        //             {/* <Link href={`/posts/${item.slug}`} className='w-max border-b-2 border-solid border-red-600 pt-[2px] pb-[0px]'>Read more</Link> */}
        //         </div>
        //         <div className='flex p-4 '>
        //             <div className='flex'>
        //                 <div className='text-[#666]'>{item.createdAt.substring(0, 10)}</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className='grid grid-cols-2 grid-rows-2 gap-16 mt-9'>
            <article className='col-span-1 row-span-1'>
                <div className='flex flex-col items-center'>
                    {item.img && (
                        <Link href={`/posts/${item.slug}`} className='h-full rounded-xl overflow-hidden'>
                            <Image
                                src={item.img}
                                alt=''
                                width={500}
                                height={500}
                                className='aspect-[4/3] object-center object-cover ' />
                        </Link>
                    )}
                    <div className='flex flex-col w-full mt-4'>
                        <span className='text-sm uppercase font-semibold text-violet-500 '>{item.catSlug}</span>
                        <Link href={`/posts/${item.slug}`} className='my-1 inline'>
                            <h2 className='font-semibold capitalize text-lg'>
                                <span>{item.title.substring(0, 30)}...</span>
                            </h2>
                        </Link>
                        <span className='capitalize text-white/50 font-semibold text-base'>{item.createdAt.substring(0, 10)}</span>
                    </div>
                </div>
            </article>
        // </div>
    )
}

export default Card