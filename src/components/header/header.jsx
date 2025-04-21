import React from 'react'
import './header.css'
import img from '../header/images/img.svg'

const header = () => {
  return (
    <header>
        <div className="container header__container">
            <div className="header__left">
                <p className="header__text">Welcome to GreenShop</p>
                <h1 className="header__title">Let’s Make a Better <span className='header__span'>planet</span></h1>
                <p className="header__info">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                <button className="header__btn">SHOP NOW</button>
            </div>
            <div className="header__right">
                <img src={img} alt="" className='header__img'/>
            </div>
        </div>
    </header>
  )
}

export default header