import { Link } from 'react-router-dom';

import UserImage from '../../../../assets/user.png';


function Header(){
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
                            <img src={UserImage} alt="user"/>
                        </div>
                        <div class="dropdown-menu me-4" aria-labelledby="dropdownMenuButton">
                            <Link to="/admin/settings" class="dropdown-item"> <i class="fas fa-cogs me-2"></i> Settings</Link>
                            <Link to="/auth" class="dropdown-item" > <i class="fas fa-sign-out-alt me-2"></i> Logout</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Header;