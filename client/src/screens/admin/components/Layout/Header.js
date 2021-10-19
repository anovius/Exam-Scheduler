import UserImage from '../../../../assets/user.jpeg';

function Header(){
    return (
        <>
            <div className="header">
                <div className='d-flex justify-content-between'>
                    <div id="menu">
                        <i className="fas fa-bars"></i>
                    </div>
                    <div>
                    <div class="dropdown">
                        <div class="user-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={UserImage} alt="user"/>
                        </div>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item">Settings</a>
                            <a class="dropdown-item" >Logout</a>
                        </div>
                  </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;