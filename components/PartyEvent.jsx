import React from 'react'

const PartyEvent = ({event}) => {
  return (
    <div className='space-y-5'>
          <div className='aspect-video w-[95%] max-w-[600px] max-h-[500px] overflow-hidden mx-auto'>
    <img src={event.imageUrl} alt="img" className='w-full h-full' />
    </div>
    <div className='text-center text-ivory2'>
      <small>{event.date}</small>
      <p>{event.name}</p>
    </div>
    </div>
  )
}

export default PartyEvent