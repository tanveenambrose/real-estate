import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-x-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
      <Navbar/>
    </div>
  )
}

export default Header
