import React from 'react'
import './nav.css'
import logo from './images/Logo.svg'

const nav = () => {

    // let hum__menu = document.getElementById("hum__menu")
    // let mobile__menu = document.getElementById("mobile__menu")
  
    // hum__menu.addEventListener("click", ()=>{
    //   mobile__menu.classList.toggle('show');
    // });

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
            <div className="hum__menu" id="hum__menu">☰</div>
        </div>
    </nav>
)
}

export default nav