import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';

import logo from "../../../assets/logo-light.png"

function OTP(){

    const [otp, setOtp] = useState(0);

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
                <Link to='/auth/reset'>
                    <button type="button" className='login-btn'>Verify OTP</button><br/>
                </Link>
                <div className="sub-link">
                    <Link to='/auth/otp'>Haven't received ? Resend OTP</Link>
                </div>
        </div>
        </>
    );
}

export default OTP; 