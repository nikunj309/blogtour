import Image from 'next/image'
import { SocialIcon } from 'react-social-icons';
import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex-col gap-12 lg:flex-row lg:flex mt-[50px] lg:py-5  lg:px-0 lg:justify-between'>
      {/* lg:mt-[50px] lg:py-5 lg:flex-1 lg:px-0 lg:justify-between  */}
      <div className='flex flex-1 flex-col gap-3'>
        <div className='flex items-center gap-2'>
          <Image src="/blogHome.jpg" className='rounded' width={50} height={50}/>
          <h1 className='text-2xl'>myblog</h1>
        </div>
        <p className='font-light'>
        <span style={{ color: 'rgb(255 154 99 / var(--tw-text-opacity))' }}>Where Ideas Bloom and Words Dance: Join the Celebration of Creativity!</span><br></br>
        Our mission is to inspire, inform, and ignite your imagination with a carefully curated collection of articles spanning a multitude of topics. Join us on this literary adventure, where every click takes you deeper into the world of compelling narratives, insightful perspectives, and the boundless beauty of expression.
        </p>
        <div className='mt-2 flex gap-2'>
        <SocialIcon url="https://twitter.com/cakky" style={{ height: 24, width: 24 }} />
                <SocialIcon url="https://instagram.com/cakky" style={{ height: 24, width: 24 }} />
                <SocialIcon url="https://facebook.com/cakky" style={{ height: 24, width: 24 }} />
                <SocialIcon url="https://linkedin.com/in/cakky" style={{ height: 24, width: 24 }} />
                <SocialIcon network="pinterest" style={{ height: 24, width: 24 }} />
        </div>
      </div>
      <div className='flex flex-1 justify-end gap-[60px] text-sm md:w-full md:justify-between lg:gap-12'>
        <div className='footer_links'>
          <span className='font-bold'>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className='footer_links'>
          <span className='font-bold'>Categories</span>
          <Link href="/">code</Link>
          <Link href="/">fashion</Link>
          <Link href="/">style</Link>
          <Link href="/">food</Link>
          <Link href="/">jobs</Link>
          <Link href="/">technology</Link>
        </div>
        <div className='footer_links'>
          <span className='font-bold'>Contact Info</span>
          <Link href="/">abc@gmail.com</Link>
          <Link href="/">+91 1234567890</Link>
          {/* <Link href="/">About</Link>
          <Link href="/">Contect</Link> */}
        </div>
      </div>
    </div>
  )
}

export default Footer
