import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-light.png';
import UserService from '../../../store/action/user.service';
const userService = new UserService();

function Login(){
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    
    function login(){
        userService.login(
            {
                user: {
                    userName: username,
                    password: password
                }
            }
        ).then(
            res => {
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
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
                    <button type="button" className='login-btn' onClick = {() => login()} >Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;