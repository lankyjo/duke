'use client'
import React, { useState } from 'react';
import PartyEvent from './PartyEvent';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Concert = () => {
  const events = [
    {
      imageUrl: '/event2.webp',
      date: 'Feb 7, 2025 – Mar 16, 2025',
      name: 'Afrobeats N’ Friends Tour 2025'
    },
    {
      imageUrl: '/4.webp',
      date: 'Mar 22, 2025 – Apr 15, 2025',
      name: 'Afrobeats Fusion Experience 2025'
    },
    {
      imageUrl: '/5.webp',
      date: 'Apr 20, 2025 – May 10, 2025',
      name: 'Rhythms of Naija Festival 2025'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < events.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className='relative py-28 bg-[url("/2.webp")] bg-cover bg-center h-full'>
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black/20"></div>

      <div className='relative w-[92%] max-w-[800px] mx-auto'>
        <h2 className='text-ivory text-5xl'>Parties</h2>
        <div className='mt-10 relative pt-16 overflow-hidden'>
          <div
            className='flex transition-transform duration-500'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {events.map((event) => (
              <div key={event.imageUrl} className='flex-shrink-0 w-full'>
                <PartyEvent event={event} />
              </div>
            ))}
          </div>
          <div className='absolute top-0 right-5 space-x-2 flex'>
            <button 
              className='border bg-ivory2/15 border-ivory p-2 disabled:opacity-50'
              onClick={goToPrev}
              disabled={currentIndex === 0}
            >
              <FaAngleLeft className='text-4xl'/>
            </button>
            <button 
              className='border bg-ivory2/15 border-ivory p-2 disabled:opacity-50'
              onClick={goToNext}
              disabled={currentIndex === events.length - 1}
            >
              <FaAngleRight className='text-4xl' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concert;
