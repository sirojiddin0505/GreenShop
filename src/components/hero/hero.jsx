import './hero.css'
import hero1 from '../hero/images/hero1.svg'
import hero2 from '../hero/images/hero2.png'

const hero = ()=>{
    return (
        <div className="hero">
            <div className="container hero__container">
                <div className="hero__left">
                    <div className="hero__left__start">
                        <h2 className="left__subtitle">Categories</h2>
                        <a href="" className='left__link'><span className="left__span">
                            <h3 className="left__title">House Plants</h3><p className="left__title">(33)</p>
                        </span></a>
                        <a href="" className='left__link'><span className="left__span">
                            <h3 className="left__title">House Plants</h3><p className="left__title">(33)</p>
                        </span></a>
                        <a href="" className='left__link'><span className="left__span">
                            <h3 className="left__title">House Plants</h3><p className="left__title">(33)</p>
                        </span></a>
                        <a href="" className='left__link'><span className="left__span">
                            <h3 className="left__title">House Plants</h3><p className="left__title">(33)</p>
                        </span></a>
                        <a href="" className='left__link'><span className="left__span">
                            <h3 className="left__title">House Plants</h3><p className="left__title">(33)</p>
                        </span></a>
                        <a href="" className='left__link'><span className="left__span">
                            <h3 className="left__title">House Plants</h3><p className="left__title">(33)</p>
                        </span></a>
                        <h2 className="left__subtitle">Price Range</h2>
                        <input type="range" className='left__input'/>
                        <h3 className="left__title">Price: $39 - $1230</h3>
                        <button className="left__btn">Filter</button>
                        <h2 className="left__subtitle">Size</h2>
                        <span className='left__span'><h3 className="left__title">Small</h3><h3 className="left__title">(119)</h3></span>
                        <span className='left__span'><h3 className="left__title">Medium</h3><h3 className="left__title">(86)</h3></span>
                        <span className='left__span'><h3 className="left__title">Large</h3><h3 className="left__title">(78)</h3></span>
                    </div>
                    <div className="hero__left__end">
                        <img src={hero2} alt="" className='left__img'/>
                        <img src={hero1} alt="" className='left__img'/>
                    </div>
                </div>
                <div className="hero__right"></div>
            </div>
        </div>
    )
}
export default hero;