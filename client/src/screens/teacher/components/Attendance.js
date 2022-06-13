import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import ScheduleService from "../../../store/action/schedule.service";
import UserService from "../../../store/action/user.service";

function Attendance(){
    const {className, subject} = useParams();
    const [students, setStudents] = useState([]);

    const history = useHistory();

    useEffect(() => {
        UserService.getStudents({className: className}).then(res => {
            let data = [];
            res.data.data.forEach(student => {
                data.push({
                    fullName: student.fullName,
                    email: student.email,
                    userName: student.userName,
                    status: true
                });
            })

            setStudents(data);
        })
    }, [])

    const changeStatus = (index) => {
        let data = [...students];
        data[index].status = !data[index].status;
        setStudents(data);
    }

    const onSubmit = () => {
        let body = {
            subject: subject,
            className: className,
            attendance: students
        }

        ScheduleService.attendance(body).then(res => {
            history.push("/teacher");
        })
    }

    return(
        <>
        <div className="col-md-11 table-container box-shadow" align="center">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-date">
                        <h5>
                            <i className="fas fa-calendar-week me-2"></i>
                            {className.toUpperCase()}
                        </h5>
                    </div>
                </div>
                <div className="custom-table">
                  <table className="table">
                    <thead className="box-shadow-bottom">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Roll #</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, index) => {
                            return(
                                <tr className= 'table-data'>
                                    <td>{student.fullName}</td>
                                    <td>{student.userName}</td>
                                    <td>{student.email}</td>
                                    <td>
                                        <input type="checkbox" id={student.userName} checked={student.status} onChange = {() => changeStatus(index)} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
                </div>
                <div className='d-flex justify-content-center align-items-center pl-2'>
                    <div>
                        <Link to="/teacher"><button className="custom-btn background-green me-4">Cancel</button></Link>
                    </div>
                    <div>
                        <button className="custom-btn background-blue" onClick={onSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Attendance;