import { useState } from "react";
import Swal from 'sweetalert2'
import ClassService from "../../../../store/action/class.service";
import Upload from "../../../shared/Upload";

function AddClass(){

    const [degree, setDegree] = useState('');
    const [year, setYear] = useState('');
    const [section, setSection] = useState('');

    function addClass(){
        let newClass = {
            degree: degree,
            year: year,
            section: section
        }

        ClassService.create(newClass).then(res => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Class Added Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            document.getElementById('classForm').reset();
        }).catch(err => {});
    }

    return (
        <>
            <div className="col-md-3 add-container" align="center">
                <h5>Add New Class</h5>
                <p>You can manually add data one by one or can upload multiple using a CSV file</p>
                <hr/>
                <div className="add-form">
                    <form id="classForm">  
                    <div className="form-group">
                        <label> <i className="fas fa-graduation-cap"></i> Degree</label><br/>
                        <input type="text" placeholder="eg: Computer Science" onChange={e => setDegree(e.target.value)} />
                    </div>  
                    <div className="form-group">
                        <label> <i className="fas fa-calendar-alt"></i> Year</label><br/>
                        <input type="text" placeholder="eg: 2018" onChange={e => setYear(e.target.value)} />
                    </div>  
                    <div className="form-group">
                        <label> <i className="fas fa-users-class"></i> Section</label><br/>
                        <input type="text" placeholder="eg: Afternoon" onChange={e => setSection(e.target.value)} />
                    </div>
                    <button type="button" className="submit background-green mt-4 mb-3" onClick={addClass}> Add Class</button> 
                    </form>
                </div>
                <Upload/>
            </div>
        </>
    );
}

export default AddClass;