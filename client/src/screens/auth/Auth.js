import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { Login, ForgotPassword, OTP, ResetPassword } from './components'
import './auth.css'

function Auth() {
    return(
        <Router>
            <div className="auth-container">
                <Switch>
                    <Route exact path="/auth" component={Login} />
                    <Route exact path="/auth/forgot" component={ForgotPassword} />
                    <Route exact path="/auth/otp" component={OTP} />
                    <Route exact path="/auth/reset" component={ResetPassword} />
                </Switch>
            </div>
        </Router>
    );
}

export default Auth;