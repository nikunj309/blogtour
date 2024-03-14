'use client'
import Image from 'next/image'
import React from 'react'
import './featured.css'
// import createGlobe from "cobe";
// import { useEffect, useRef } from "react"

const Featured = () => {
    // const canvasRef = useRef();

    // useEffect(() => {
    //     let phi = 0;

    //     const globe = createGlobe(canvasRef.current, {
    //         devicePixelRatio: 2,
    //         width: 600 * 2,
    //         height: 600 * 2,
    //         phi: 0,
    //         theta: 0,
    //         dark: 1,
    //         diffuse: 1.2,
    //         mapSamples: 16000,
    //         mapBrightness: 6,
    //         baseColor: [0.3, 0.3, 0.3],
    //         markerColor: [0.1, 0.8, 1],
    //         glowColor: [1, 1, 1],
    //         markers: [
    //             // longitude latitude
    //             { location: [37.7595, -122.4367], size: 0.03 },
    //             { location: [40.7128, -74.006], size: 0.1 }
    //         ],
    //         onRender: (state) => {
    //             // Called on every animation frame.
    //             // `state` will be an empty object, return updated params.
    //             state.phi = phi;
    //             phi += 0.01;
    //         }
    //     });

    //     return () => {
    //         globe.destroy();
    //     };
    // }, []);
    return (
        <div className='mt-[30px] overflow-hidden'>
            <h1 className="mb-2 font-mono text-4xl text-white md:text-6xl">
                Fuel Your Mind, Ignite Your Creativity: <br className="block md:hidden" />
                <span className="relative ">
                    
                    <span className="h-20 pt-2 overflow-x-hidden typewriter  whitespace-nowrap text-brand-accent" style={{color: 'rgb(255 154 99 / var(--tw-text-opacity))'}}>
                    Welcome to Our Blogging Oasis!
                    </span>
                    <span
                        className="cursor  absolute -bottom-0 left-0 -top-1 inline-block bg-gray-900 w-full animate-type will-change"
                    ></span>
                </span>
            </h1>
            {/* <h1 className='text-4xl md:text-5xl lg:text-[64px] xl:text-7xl font-bold-[300]'>Fuel Your Mind, Ignite Your Creativity: Welcome to Our Blogging Oasis!</h1> */}
            <div className='mt-[60px] flex items-center gap-12'>
                <div className='flex-1 flex flex-col gap-5'>
                    <h1 className='text-3xl font-satoshi font-bold'>Embark on a Journey of Words – Where Every Click Unveils a World of Wonders!.</h1>
                    <p className='text-xl font-bold-[300]' >Welcome to a digital realm where words weave magic, and ideas take flight. Step into our vibrant corner of the internet, where every click opens the door to inspiration, imagination, and a celebration of the written word.</p>
                </div>
                <div className='flex-1 h-[500px] relative hidden lg:flex'>
                    <Image src='/blogHome.jpg' alt='' fill className='object-cover' />
                    {/* <canvas
                        ref={canvasRef}
                        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default Featured