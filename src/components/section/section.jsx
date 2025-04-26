import React from "react";
import './section.css'
import section1 from '../section/images/section1.svg'
import section2 from '../section/images/section2.svg'
import section3 from '../section/images/section3.svg'
import section4 from '../section/images/section4.svg'


const section = ()=>{
    return(
        <section>
            <div className="container section__container">
                <h1 className="section__title">Our Blog Posts</h1>
                <p className="section__text">We are an online plant shop offering a wide range of cheap and trendy plants. </p>
                <ul className="section__list">
                    <li className="section__item">
                        <img src={section1} alt="#" className="section__img" />
                        <span className="section__span">
                            <p className="span__text">September 12</p>
                            <p className="span__text">Read in 6 minutes</p>
                        </span>
                        <h2 className="section__subtitle">Cactus & Succulent Care Tips</h2>
                        <p className="section__subtext">Cacti are succulents are easy care plants for any home or patio. </p>
                        <a href="" className="section__link">Read More</a>
                    </li>
                    <li className="section__item">
                        <img src={section2} alt="#" className="section__img" />
                        <span className="section__span">
                            <p className="span__text">September 12</p>
                            <p className="span__text">Read in 6 minutes</p>
                        </span>
                        <h2 className="section__subtitle">Cactus & Succulent Care Tips</h2>
                        <p className="section__subtext">Cacti are succulents are easy care plants for any home or patio. </p>
                        <a href="" className="section__link">Read More</a>
                    </li>
                    <li className="section__item">
                        <img src={section3} alt="#" className="section__img" />
                        <span className="section__span">
                            <p className="span__text">September 12</p>
                            <p className="span__text">Read in 6 minutes</p>
                        </span>
                        <h2 className="section__subtitle">Cactus & Succulent Care Tips</h2>
                        <p className="section__subtext">Cacti are succulents are easy care plants for any home or patio. </p>
                        <a href="" className="section__link">Read More</a>
                    </li>
                    <li className="section__item">
                        <img src={section4} alt="#" className="section__img" />
                        <span className="section__span">
                            <p className="span__text">September 12</p>
                            <p className="span__text">Read in 6 minutes</p>
                        </span>
                        <h2 className="section__subtitle">Cactus & Succulent Care Tips</h2>
                        <p className="section__subtext">Cacti are succulents are easy care plants for any home or patio. </p>
                        <a href="" className="section__link">Read More</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default section;