"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Pagination = ({ page, hasPrev, hasNext }) => {

  const router = useRouter()
  return (
    <div className='flex justify-between'>
      <button
        className='pagination_btn'
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Prev
      </button>
      <button
        className='pagination_btn'
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination