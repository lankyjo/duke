import React from 'react'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full items-center flex justify-between p-5 bg-gradient-to-r from-black to-transparent shadow-lg shadow-black z-30'>
        <a href="/">
        <span>
            <img width={80} src="/logo.png" alt="logo" />
        </span>
        </a>

        <ul className='flex gap-5'>
            {
            ['Event', 'Contact', 'Merch'].map((link, index)=>(
                <li key={index} className='text-ivory text-xl cursor-pointer'>{link}</li>
            ))
            }
        </ul>
    </header>
  )
}

export default Header