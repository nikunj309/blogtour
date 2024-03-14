import React from 'react'
import Card from './Card'
import Pagination from './Pagination'

const getData = async (page,cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error("Failed")
  }
  return res.json();
}

const CardList = async ({ page,cat }) => {
  const { posts, count } = await getData(page,cat);
  const POST_PER_PAGE = 4;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className='flex-[5] items-center justify-center'>
      <h1 className='mt-12 mb-2 text-2xl font-semibold'>Recent Posts</h1>
      {/* <div className='xl:flex xl:flex-wrap xl:gap-24 md:justify-center md:flex md:gap-16'> */}
      <div className='md:grid md:grid-cols-2 md:grid-rows-2 grid grid-cols-1 mb-6 items-center gap-16 mt-9'>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}

        {/* <Card />
        <Card />
        <Card /> */}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList