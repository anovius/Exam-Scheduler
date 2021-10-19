import logo from "../../../assets/logo-light.png"
function ResetPassword(){
    return(
        <>
             <div class="col-xs-1" align="center">   
                <img src={logo} className="logo"/>
                <form>
                    <div className='input-container'>
                        <i class="fas fa-envelope input-icon"></i>
                        <input type='text' placeholder='New Password'/><br/>
                    </div>
                    <div className='input-container'>
                        <i class="fas fa-key input-icon"></i>
                        <input type='password' placeholder='Confirm Password'/><br/>
                    </div>
                    <button className='login-btn'>Change Password</button>
                </form>
            </div>
        </>
    );
}

export default ResetPassword;