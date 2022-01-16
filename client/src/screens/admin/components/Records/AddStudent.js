import { useState } from "react";
import Swal from 'sweetalert2'
import UserService from "../../../../store/action/user.service";
import Upload from "../../../shared/Upload";

function AddStudent(){
    const [name, setName] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [email, setEmail] = useState('');

    function createStudent(){
        let student = {
            fullName: name,
            userName: rollNo,
            email: email
        }

        UserService.createStudent(student).then(res => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Student Added Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            document.getElementById('studentForm').reset();
        });
    }

    return (
        <>
            <div className="col-md-3 add-container" align="center">
                <h5>Add New Student</h5>
                <p>You can manually add data one by one or can upload multiple using a CSV file</p>
                <hr/>
                <div className="add-form">
                    <form id="studentForm">  
                    <div className="form-group">
                        <label> <i className="fas fa-user"></i> Name</label><br/>
                        <input type="text" placeholder="eg: Junaid Zubair" onChange={e => setName(e.target.value)}/>
                    </div>  
                    <div className="form-group">
                        <label> <i className="fas fa-clipboard-list"></i> Roll Number</label><br/>
                        <input type="text" placeholder="eg: BCSF18A511" onChange={e => setRollNo(e.target.value)}/>
                    </div>  
                    <div className="form-group">
                        <label> <i className="fas fa-envelope"></i> Email</label><br/>
                        <input type="email" placeholder="eg: bcsf18a511@pucit.edu.pk" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <button type="button" className="submit background-green mt-4 mb-3" onClick={createStudent}> Add Student</button> 
                    </form>
                </div>
                <Upload/>
            </div>
        </>
    );
}

export default AddStudent;