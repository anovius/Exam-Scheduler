import { useState } from "react";
import Upload from "../../../shared/Upload";
import Swal from 'sweetalert2'
import UserService from "../../../../store/action/user.service";

function AddTeacher(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUsername] = useState('');

    function createTeacher(){
        let teacher = {
            fullName: name,
            userName: userName,
            email: email
        }

        UserService.createTeacher(teacher).then(res => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Teacher Added Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            document.getElementById('teacherForm').reset();
        });
    }

    return (
        <>
            <div className="col-md-3 add-container" align="center">
                <h5>Add New Teacher</h5>
                <p>You can manually add data one by one or can upload multiple using a CSV file</p>
                <hr/>
                <div className="add-form">
                    <form id="teacherForm">  
                    <div className="form-group">
                        <label> <i className="fas fa-user"></i> Name</label><br/>
                        <input type="text" placeholder="eg: Junaid Zubair" onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label> <i className="fas fa-envelope"></i> Email</label><br/>
                        <input type="email" placeholder="eg: teacher@pucit.edu.pk" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>  <i className="fas fa-user"></i> Username</label><br/>
                        <input type="text" placeholder="eg: junaid" onChange={e => setUsername(e.target.value)}/>
                    </div>  
                    <button type="button" className="submit background-green mt-4 mb-3" onClick={createTeacher}> Add Teacher</button> 
                    </form>
                </div>
                <Upload/>
            </div>
        </>
    );
}

export default AddTeacher;