import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fs from 'fs';
import ScheduleService from "../../../store/action/schedule.service";
import FileDownload from 'js-file-download';
import ClassService from "../../../store/action/class.service";
function Schedule() {

    const [schedule, setSchedule] = useState({
        start: "",
        end: "",
        title: "",
        subjects: []
    });

    const [classes, setClasses] = useState([]);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        ScheduleService.get().then(res => {
            if(res.data.data) setSchedule(res.data.data);
        })

        ClassService.getAll().then(res => {
            setClasses(res.data.data);
        })
    }, []);

    const formatDate = (date) => {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    const getDay = (date) => {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[new Date(date).getDay()];
    }

    const downloadFile = () => {
        ScheduleService.download();
    }

    const filterClass = (className) => {
        if(className === "0")  {
            ScheduleService.get().then(res => {
                if(res.data.data) setSchedule(res.data.data);
            })
        }
        else{
            ScheduleService.get({class: className}).then(res => {
                if(res.data.data) setSchedule(res.data.data);
            })
        }
    }

    return(
        <>
        <div class="modal fade" id="attendance" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Attendance</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <table className="table">
                    <thead className="box-shadow-bottom">
                        <tr>
                            <th scope="col">Roll #</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.subjects[index]?.attendance.map((subject, index) => {
                            return(
                                <tr>
                                    <td>{subject.userName}</td>
                                    <td>{subject.status ? "Present" : "Absent"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
            <div className="col-md-11 table-container box-shadow" align="center">
                
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-date">
                        <i className="fas fa-calendar-week me-2"></i>
                        {schedule.start} - {schedule.end}
                    </div>
                    <div>
                        <Link to="/schedule/create" ><button className="custom-btn background-green">Create</button></Link>
                    </div>
                </div>

                <div className='d-flex justify-content-between align-items-center mt-4 px-4 mb-4'>
                    <div className="schedule-title ">
                        {schedule.title}
                    </div>
                    <div>
                        <select className="form-select" onChange={(e) => filterClass(e.target.value)}>
                            <option value="0">All</option>
                            {classes.map((classs, index) => {
                                return(
                                    <option value={classs.degree+classs.year+classs.section}>{classs.degree+classs.year+classs.section}</option>
                                );
                            }
                        )}
                        </select>
                    </div>
                </div>
                <div className="custom-table">
                  <table className="table">
                    <thead className="box-shadow-bottom">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Day</th>
                        <th scope="col">Course</th>
                        <th scope="col">Time</th>
                        <th scope="col">Room</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.subjects.map((subject, i) => {
                        return(
                            <tr className= 'table-data'>
                                <td>{formatDate(subject.date)}</td>
                                <td>{getDay(subject.date)}</td>
                                <td>{subject.name}</td>
                                <td>{subject.slot}</td>
                                <td>{subject.room}</td>
                                <td data-toggle="modal" data-target="#attendance"><i onClick={() => setIndex(i)} className="fas fa-clipboard-list mt-2"></i></td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
                </div>
                    <div className="edit-float" onClick={downloadFile}>
                        <i class="fas fa-edit"></i>
                    </div>
            </div>
        </>
    );
}

export default Schedule;