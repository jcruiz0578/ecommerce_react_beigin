
import './NewsLetter.css'
const NewsLatter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Excluisive Offers On Your Email</h1>
            <p>Subscribe to our newletter and stay update</p>
            <div>
                <input type="email" name="email" id="email" placeholder='Tu Email' />
                <button>Suscribete</button>
            </div>
        </div>
    );
};

export default NewsLatter;