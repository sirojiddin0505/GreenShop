import './hero.css'
import hero1 from '../hero/images/hero1.svg'
import hero2 from '../hero/images/hero2.png'
import boxs1 from '../hero/images/boxs1.svg'

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
                <div className="hero__right">
                    <div className="right__start">
                        <h2 className="right__subtitle">All Plants</h2>
                        <h2 className="right__subtitle">New Arrivals</h2>
                        <h2 className="right__subtitle">Sale</h2>
                        <select name="change">
                            <option value="#" disabled >Default sorting</option>
                            <option value="#">Sort 1</option>
                            <option value="#">Sort 2</option>
                            <option value="#">Sort 3</option>
                            <option value="#">Sort 4</option>
                        </select>
                    </div>
                    <div className="right__end">
                        <div className="hero__boxs">
                            <img src={boxs1} alt="" className='hero__pic' />
                            <h3 className="right__title">Barberton Daisy</h3>
                            <p className="right__text">$119.00</p>
                        </div>
                        <div className="hero__boxs">
                            <img src={boxs1} alt="" className='hero__pic'/>
                            <h3 className="right__title">Angel Wing Begonia</h3>
                            <p className="right__text">$116.00</p>
                        </div>
                        <div className="hero__boxs">
                            <img src={boxs1} alt="" className='hero__pic'/>
                            <h3 className="right__title">African Violet</h3>
                            <p className="right__text">$199.00  <s>salom</s></p>
                        </div>
                        <div className="hero__boxs">
                            <img src={boxs1} alt="" className='hero__pic'/>
                            <h3 className="right__title">Beach Spider Lily</h3>
                            <p className="right__text">$129.00</p>
                        </div>
                        <div className="hero__boxs">
                            <img src={boxs1} alt="" className='hero__pic'/>
                            <h3 className="right__title">Blushing Bromeliad</h3>
                            <p className="right__text">$99.00</p>
                        </div>
                        <div className="hero__boxs">
                            <img src={boxs1} alt="" className='hero__pic'/>
                            <h3 className="right__title">Aluminum Plant</h3>
                            <p className="right__text">$79.00</p>
                        </div>
                        <div className="hero__boxs">
                            <img src={boxs1} alt="" className='hero__pic' />
                            <h3 className="right__title">Bird's Nest Fern</h3>
                            <p className="right__text">$69.00</p>
                        </div>
                        <div className="hero__boxs">
                            <img src={boxs1} alt="" className='hero__pic'/>
                            <h3 className="right__title">Broadleaf Lady Palm</h3>
                            <p className="right__text">$139.00</p>
                        </div>
                        <div className="hero__boxs">
                            <img src={boxs1} alt="" className='hero__pic'/>
                            <h3 className="right__title">Chinese Evergreen</h3>
                            <p className="right__text">$39.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default hero;