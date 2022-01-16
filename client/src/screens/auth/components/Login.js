import { useState } from 'react';
import { Link,  } from 'react-router-dom';
import logo from '../../../assets/logo-light.png';
import UserService from '../../../store/action/user.service';
import {useUserContext} from '../../../store/UserStore';


function Login(){
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const { user, login } = useUserContext();

    function submitForm(){
        let body = {
            user: {
                userName: username,
                password: password
            }
        }
        UserService.login(body).then(res => {
            const {user} = res.data.data;
            login(user);
        });
    }
    
    return(
        <>
            <div className="col-xs-1" align="center">   
                <img src={logo} className="logo" alt="logo"/>
                <form>
                    <div className='input-container'>
                        <i className="fas fa-envelope input-icon"></i>
                        <input type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} /><br/>
                    </div>
                    <div className='input-container'>
                        <i className="fas fa-key input-icon"></i>
                        <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} /><br/>
                    </div>
                    <div className="special">
                        <Link to='/auth/forget'>Forgot Password ?</Link>
                    </div>
                    <button type="button" className='login-btn' onClick={() => submitForm()} >Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;