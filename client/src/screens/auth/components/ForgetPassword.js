import logo from "../../../assets/logo-light.png"
function ForgetPassword(){
    return(
        <>
            <div class="col-xs-1" align="center">   
                <img src={logo} className="logo"/>
                <form>
                    <div className='input-container'>
                        <i class="fas fa-envelope input-icon"></i>
                        <input type='text' placeholder='Email Address'/><br/>
                    </div>
                    
                    <button className='login-btn'>Send OTP</button>
                </form>
            </div>
        </>
        
    );
}

export default ForgetPassword;