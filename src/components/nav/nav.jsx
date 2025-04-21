import React from 'react'
import './nav.css'
import logo from './images/Logo.svg'

const nav = () => {
  return (
    <nav>
        <div className="container nav__container">
            <div className="nav__left">
                <img src={logo} alt="logo bor" className='nav__logo'/>
            </div>
            <div className="nav__center">
                <a href="#" className="nav__link"><p className="nav__text">Home</p></a>
                <a href="#" className="nav__link"><p className="nav__text">Shop</p></a>
                <a href="#" className="nav__link"><p className="nav__text">Plant Care</p></a>
                <a href="#" className="nav__link"><p className="nav__text">Blogs</p></a>
            </div>
            <div className="nav__right"><button className='nav__btn'>Login</button></div>
            <div className="hum__menu">≡</div>
        </div>
    </nav>
)
}

export default nav