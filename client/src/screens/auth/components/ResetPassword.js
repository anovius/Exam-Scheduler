import logo from "../../../assets/logo-light.png"
function ResetPassword(){
    return(
        <>
             <div className="col-xs-1" align="center">   
                <img src={logo} className="logo" alt="logo"/>
                <form>
                    <div className='input-container'>
                        <i className="fas fa-key input-icon"></i>
                        <input type='password' placeholder='New Password'/><br/>
                    </div>
                    <div className='input-container'>
                        <i className="fas fa-key input-icon"></i>
                        <input type='password' placeholder='Confirm Password'/><br/>
                    </div>
                    <button type="button" className='login-btn'>Change Password</button>
                </form>
            </div>
        </>
    );
}

export default ResetPassword;