import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-light.png';

function Login(){
    return(
        <>
            <div className="col-xs-1" align="center">   
                <img src={logo} className="logo" alt="logo"/>
                <form>
                    <div className='input-container'>
                        <i className="fas fa-envelope input-icon"></i>
                        <input type='text' placeholder='Email Address'/><br/>
                    </div>
                    <div className='input-container'>
                        <i className="fas fa-key input-icon"></i>
                        <input type='password' placeholder='Password'/><br/>
                    </div>
                    <div className="special">
                        <Link to='/auth/forget'>Forgot Password ?</Link>
                    </div>
                    <Link to="/admin">
                        <button type="button" className='login-btn'>Login</button>
                    </Link>
                </form>
            </div>
        </>
    );
}

export default Login;