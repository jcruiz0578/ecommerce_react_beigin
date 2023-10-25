import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image  from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>LLEGANDO NUEVA MERCANCIA</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>nuevas</p>
                        <img src={hand_icon} alt="hand_icon" />
                    </div>
                    <p>colecciones</p>
                    <p>para todo el mundo</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Última colección</div>
                    <img src={arrow_icon} alt="arrow_icon" />
                </div>
            </div>


            <div className="hero-right">
                <img src={hero_image} alt="hero_image" />
            </div>
        </div>
    );
};

export default Hero;