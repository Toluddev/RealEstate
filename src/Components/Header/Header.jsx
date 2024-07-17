import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <section class="h-wrapper">
      <div class="flexCenter paddings innerWidth h-container">

        <img src="./logo.png" alt="logo" width={100} />

        <div class="flexCenter h-menu">
            <a href="">Residences</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button>Contact Us</button>
        </div>
      </div>
    </section >
  )
}

export default Header
