import './Navbar.css'
import logo from '../Assets/logo2.png'
import cart_icon from '../Assets/cart_icon.png'
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {ShopContext} from "../../Context/ShopContext.jsx";


const Navbar = () => {
    const [menu, setMenu] =useState("tienda");

    const {getTotalCartItems}= useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Logo"/>
                <p>mi_tiendita.com</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("tienda")}}> <Link   to='/'>Tienda</Link>{menu==="tienda"?<hr/>:<></>} </li>
               <li onClick={()=>{setMenu("caballeros")}}> <Link  to='/mens'>Caballeros</Link>{menu==="caballeros"?<hr/>:<></>}</li>
               <li onClick={()=>{setMenu("damas")}}><Link  to='/womens'>Damas</Link>{menu==="damas"?<hr/>:<></>}</li>
               <li onClick={()=>{setMenu("niños")}}><Link  to='/kids'>Niñ@s</Link>{menu==="niños"?<hr/>:<></>}  </li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Login"/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>


        </div>
    )

}
export default Navbar