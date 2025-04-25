import './main.css'
import main1 from '../main/images/main1.svg'
import main2 from '../main/images/main2.svg'


const main = ()=>{
    return (
        <main>
            <div className="container main__container">
                <div className="main__left">
                    <img src={main1} alt="" className="main__img" />
                    <div className="main__box">
                        <h1 className="main__title">SUMMER CACTUS $&  SUCCULENTS</h1>
                        <p className="main__text">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                        <button className="main__btn">Find More</button>
                    </div>
                </div>
                <div className="main__right">
                <img src={main2} alt="" className="main__img" />
                <div className="main__box">
                    <h1 className="main__title">Styling Trends & much more</h1>
                    <p className="main__text">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <button className="main__btn">Find More</button>
                </div>
                </div>
            </div>
        </main>
    )
}
export default main