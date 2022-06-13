import "./shared.css"
import { useState } from "react";
import UserService from "../../store/action/user.service";
function Settings() {
    const [settings, setSettings] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    })

    const [msg, setMsg] = useState("");

    const onSubmit = () => {
        if(settings.newPassword !== settings.confirmPassword) {
            setMsg("Passwords do not match");
            return;
        }

        UserService.settings(settings).then(res => {
            setMsg(res.data.data);
            document.getElementById("settings").reset();
        }).catch(err => {
            setMsg("Current password is incorrect");
        })
    }
    return (
        <>
         <div className="col-md-3 add-container" align="center">
                <div className="add-form">
                    <form id="settings">
                    <div className="form-group">
                        <label> <i className="fas fa-lock-open"></i> Current Password</label><br/>
                        <input type="password" placeholder="***********" onChange={(e) => {setSettings({...settings, currentPassword: e.target.value})}} />
                    </div>   
                    <div className="form-group">
                        <label> <i className="fas fa-lock-open"></i> New Password</label><br/>
                        <input type="password" placeholder="***********" onChange={(e) => {setSettings({...settings, newPassword: e.target.value})}}/>
                    </div>  
                    <div className="form-group">
                        <label> <i className="fas fa-lock"></i> Confirm Password</label><br/>
                        <input type="password" placeholder="***********" onChange={(e) => {setSettings({...settings, confirmPassword: e.target.value})}}/>
                    </div>
                    <button type="button" className="submit background-green mt-4 mb-3" onClick={onSubmit}> Update</button> 
                    </form>
                    <p className="text-center text-danger">{msg}</p>
                </div>
            </div>
        </>
    );
}

export default Settings;