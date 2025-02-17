import React from 'react'

const Concert = () => {
  return (
<section className='relative py-28 bg-[url("/2.webp")] bg-cover bg-center h-full'>
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black/20"></div>

    <div className='relative w-[92%]  max-w-[800px] mx-auto'>
        <h2 className='text-ivory  text-5xl'>Parties</h2>
        <div className='mt-10'>
            <div className='aspect-video w-[95%] max-w-[600px] max-h-[500px] overflow-hidden mx-auto'>
                <img src="/event2.webp" alt="img" className='w-full h-full' />
            </div>
        </div>
    </div>
</section>
  )
}

export default Concert