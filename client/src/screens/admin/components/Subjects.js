import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { environment } from "../../../environment";
import UserService from "../../../store/action/user.service";

function Subjects() {

    const [Subjects, setSubjects] = useState([]);

    function getSubjects() {
        UserService.getSubjects().then(res => {
            setSubjects(res.data.data.docs);
        });
    }

    useEffect(() => {
        getSubjects();
    }, []);


    return (
        <>

            <div className="col-md-11 table-container box-shadow" align="center">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-title m-2">
                        Subjects & Faculty
                    </div>
                    <div>
                        <Link to="/admin/subjects/add">
                            <button className="custom-btn background-green">Add</button>
                        </Link>
                    </div>
                </div>
                <div className="custom-table mt-4">
                    <table className="table">
                        <thead className="box-shadow-bottom">
                            <tr>
                                <th></th>
                                <th scope="col">Subject Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Subjects.map((subject, i) =>
                                <tr className="table-data">
                                    <td>
                                        <div className="profile-img">
                                            <img src={environment.file_url + subject.img} alt="user" />
                                        </div>
                                    </td>
                                    <td>{subject.fullName}</td>
                                    <td>{subject.userName}</td>
                                    <td>{subject.email}</td>
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

export default Subjects;