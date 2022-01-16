import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { environment } from "../../../environment";
import UserService from "../../../store/action/user.service";
function Students() {

    const [students, setStudents] = useState([]);

    function getStudents(){
        UserService.getStudents().then(res => {
            setStudents(res.data.data.docs);
            console.log(res.data.data.docs);
        });
    }

    useEffect(() => {
        getStudents();
    }, []);

    return(
        <>
            <div className="col-md-11 table-container box-shadow" align="center">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-title m-2">
                        Students
                    </div>
                    <div>
                    <Link to="/admin/students/add">
                            <button className="custom-btn background-green">Add</button>
                        </Link>
                    </div>
                </div>
                <div className="custom-table mt-4">
                  <table className="table">
                    <thead className="box-shadow-bottom">
                    <tr>
                        <th></th>
                        <th scope="col">Name</th>
                        <th scope="col">Roll No</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, i) =>
                        <tr className="table-data">
                            <td>
                                <div className="profile-img">
                                    <img src={environment.file_url+student.img} alt="user"/>
                                </div>
                            </td>
                            <td>{student.fullName}</td>
                            <td>{student.userName}</td>
                            <td>{student.email}</td>
                        <td></td>
                        </tr>
                    )}
                </tbody>
                </table>
                </div>
                <div className='d-flex justify-content-center align-items-center pl-2'>
                    <div>
                        <button disabled className="custom-btn disabled me-4">Prev</button>
                    </div>
                    <div>
                        <button className="custom-btn background-blue">Next</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Students;