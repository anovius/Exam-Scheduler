import { useState } from "react";
import Swal from 'sweetalert2'
import UserService from "../../../../store/action/user.service";
import Upload from "../../../shared/Upload";

function AddSubject(){
    const [name, setName] = useState('');
    const [className, setClassName] = useState('');

    function createSubject(){
        let subject = {
            name: name,
            class: className,
        }

        UserService.createSubject(subject).then(res => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Subject Added Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            document.getElementById('subjectForm').reset();
        });
    }

    return ( 
        <>
            <div className="col-md-3 add-container" align="center">
                <h5>Add New Subject</h5>
                <p>You can manually add data one by one or can upload multiple using a CSV file</p>
                <hr/>
                <div className="add-form">
                    <form id="subjectForm">  
                    <div className="form-group">
                        <label> <i className="fas fa-user"></i> Name</label><br/>
                        <input type="text" placeholder="eg: OOP" onChange={e => setName(e.target.value)}/>
                    </div>  
                    <div className="form-group">
                        <label> <i className="fas fa-clipboard-list"></i> Class Name</label><br/>
                        <input type="text" placeholder="eg: CSF18A" onChange={e => setClassName(e.target.value)}/>
                    </div>  
                    <button type="button" className="submit background-green mt-4 mb-3" onClick={createSubject}> Add Subject</button> 
                    </form>
                </div>
                <Upload/>
            </div>
        </>
    );
}

export default AddSubject;