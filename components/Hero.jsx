import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='pt-40 pb-20 bg-[url("/1.webp")] h-full bg-cover bg-center'>
        <div className='w-[90%] max-w-[550px] mx-auto aspect-square'>
            <Link href='/event' className='block w-full h-full'>
                <img src="/event.webp" alt="event" className='w-full h-full object-cover object-center' />
            </Link>
        </div>
    </section>
  )
}

export default Hero