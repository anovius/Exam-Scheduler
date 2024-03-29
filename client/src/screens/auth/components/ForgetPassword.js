import { Link } from "react-router-dom";
import logo from "../../../assets/logo-light.png"
function ForgetPassword(){
    return(
        <>
            <div className="col-xs-1" align="center">   
                <img src={logo} className="logo" alt="logo"/>
                <form>
                    <div className='input-container'>
                        <i className="fas fa-envelope input-icon"></i>
                        <input type='text' placeholder='Email Address'/><br/>
                    </div>
                    <Link to='/auth/otp'>
                        <button type="button" className='login-btn'>Send OTP</button>
                    </Link>
                </form>
            </div>
        </>
        
    );
}

export default ForgetPassword;