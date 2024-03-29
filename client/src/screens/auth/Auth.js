import { Switch, Route} from "react-router-dom";

import { Login, ForgetPassword, OTP, ResetPassword } from './components'
import './auth.css'

function Auth() {
    return(
        <div className="auth-container">
            <div>
                <Switch>
                    <Route exact path="/auth" component={Login} />
                    <Route exact path="/auth/forget" component={ForgetPassword} />
                    <Route exact path="/auth/otp" component={OTP} />
                    <Route exact path="/auth/reset" component={ResetPassword} />                        
                </Switch>   
            </div>
        </div>
    );
}

export default Auth;