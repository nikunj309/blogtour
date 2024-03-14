import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import React from 'react'

const BlogPage = ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
    const { cat } = searchParams;
    return (
        <div>
            <h1 className='text-center rounded-[5%] border-dashed border-2 border-red-500 px-3 py-1 font-bold text-2xl capitalize'>
                <span className='text-orange-600'>{cat}</span>  Blog
            </h1>
            <div className='flex gap-12 justify-center'>
                <CardList page={page} cat={cat} />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage