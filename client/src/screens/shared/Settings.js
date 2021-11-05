import "./shared.css"

import UserImage from '../../assets/user.png';

function Settings() {
    return (
        <>
         <div className="col-md-3 add-container" align="center">
                <div className="add-form">
                    <form>  
                    <div class="profile-pic">
                    <img src={UserImage} className="image" alt="user"/>
                        <div className="overlay">
                            <i className="icon" title="User Profile">
                            <i className="fas fa-camera"></i>
                        </i>
                        </div>
                    </div>
                    <div className="form-group">
                        <label> <i className="fas fa-lock-open"></i> Current Password</label><br/>
                        <input type="text" placeholder="***********" />
                    </div>   
                    <div className="form-group">
                        <label> <i className="fas fa-lock-open"></i> New Password</label><br/>
                        <input type="text" placeholder="***********" />
                    </div>  
                    <div className="form-group">
                        <label> <i className="fas fa-lock"></i> Confirm Password</label><br/>
                        <input type="text" placeholder="***********" />
                    </div>
                    <button type="button" className="submit background-green mt-4 mb-3"> Update</button> 
                    </form>
                </div>
            </div>
        </>
    );
}

export default Settings;