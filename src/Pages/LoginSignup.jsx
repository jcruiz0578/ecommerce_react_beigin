import './CSS/LoginSignup.css'
const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Nombre y Apellido' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Contraseña' />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account?  <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <div><input className='loginsignup-agree-check' type="checkbox" name="" id="" /></div>
                    <div><p>By continuing, i agree to the terms of use & privacy policy.</p></div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;