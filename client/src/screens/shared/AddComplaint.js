import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ComplaintService from "../../store/action/complaint.service";

function AddComplaint(){
    const history = useHistory();
    const { pathname } = useLocation();
    const [link, setLink] = useState('/'+pathname.split('/')[1]+'/'+pathname.split('/')[2]);
    const [complaint, setComplaint] = useState({
        title: "",
        description: "",
    });

    const onSubmit = () => {
        ComplaintService.create(complaint).then(res => {
            history.push(link);
        })
    }

    return (
        <>
            <div className="col-md-8 add-container m2-4" align="center">
                <h5>Add Your Complain</h5>
                <p>You can add complain here.Administration will take furthur actions if required.</p>
                <div className="add-form">
                    <form>  
                    <div className="form-group">
                        <label> <i className="fas fa-graduation-cap"></i> Title</label><br/>
                        <input type="text" onChange = {(e) => {setComplaint({...complaint, title: e.target.value})}}/>
                    </div>  
                    <div className="description-form">
                        <label> <i className="fas fa-comment"></i> Description</label><br/>
                        <textarea rows="10" onChange = {(e) => {setComplaint({...complaint, description: e.target.value})}}></textarea>
                    </div>  
                    <button type="button" className="submit background-green mt-4 mb-3" onClick={onSubmit}> Submit</button> 
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddComplaint;