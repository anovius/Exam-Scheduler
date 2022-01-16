import { Link } from 'react-router-dom';
import { environment } from '../../environment';
import { useUserContext } from '../../store/UserStore';



function Header(){
    const {user, logout} = useUserContext();
    return (
        <>
            <div className="header box-shadow">
                <div className='d-flex justify-content-between align-items-center'>
                    <div id="menu">
                        <i className="fas fa-bars"></i>
                    </div>
                    <div>
                    <div class="dropdown">
                        <div class="user-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={environment.file_url+user.img} alt="user"/>
                        </div>
                        <div class="dropdown-menu me-4" aria-labelledby="dropdownMenuButton">
                            <Link to="/settings" class="dropdown-item"> <i class="fas fa-cogs me-2"></i> Settings</Link>
                            <button onClick={logout} className=' ms-2'> <i class="fas fa-sign-out-alt"></i> Logout</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Header;