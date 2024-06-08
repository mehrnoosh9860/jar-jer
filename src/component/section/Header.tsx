import React from 'react'
import Logo from '../logo/Logo'
import NavbarList from '../list/NavbarList'
import Social from '../social media/Social'
import Categories from '../button/Categories'
import ContactUs from '../button/ContactUs'
import Acount from '../button/Acount'

function Header() {
  return (
    <div className='flex backgroundtransparent'>
      <div className='flex  float-left'>
      <Logo/>
      <Categories/>
      <ContactUs/>
      <Social/>
      </div>
      
      <div className="flex float-right">
        <img src='/img/basket.png' className="w-6 h-6"/>
        <Acount/>
         </div>
      
    </div>
  )
}

export default Header
