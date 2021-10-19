import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';

import logo from "../../../assets/logo-light.png"

function OTP(){

    const [otp, setOtp] = useState(0);

    function temp(){
        console.log(otp);
    }

    return(
        <>
        <div className="col-xs-1" align="center">   
                <img src={logo} className="logo" alt="logo"/>
                <OtpInput
                    value={otp}
                    numInputs={4}
                    inputStyle="otp"
                    containerStyle="otp-container"
                    focusStyle="otp-focus"
                    shouldAutoFocus={true}
                    isInputNum={true}
                    onChange={setOtp}
                />
                <button type="button" className='login-btn'>Verify OTP</button><br/>
                <div className="sub-link">
                    <Link to='/auth/otp'>Haven't recieved ? Resend OTP</Link>
                </div>
        </div>
        </>
    );
}

export default OTP; 