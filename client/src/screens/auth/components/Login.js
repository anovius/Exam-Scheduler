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
                    <button type="button" className='login-btn'>Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;