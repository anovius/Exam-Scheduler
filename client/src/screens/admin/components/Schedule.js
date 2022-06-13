import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScheduleService from "../../../store/action/schedule.service";

function Schedule() {

    const [schedule, setSchedule] = useState({
        start: "",
        end: "",
        title: "",
        subjects: []
    });

    useEffect(() => {
        ScheduleService.get().then(res => {
            if(res.data.data) setSchedule(res.data.data);
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

    return(
        <>
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

                <div className='d-flex justify-content-between align-items-center mt-4 px-4'>
                    <div className="schedule-title ">
                        {schedule.title}
                    </div>
                    <div>
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
                    </tr>
                </thead>
                <tbody>
                    {schedule.subjects.map(subject => {
                        return(
                            <tr className= 'table-data'>
                                <td>{formatDate(subject.date)}</td>
                                <td>{getDay(subject.date)}</td>
                                <td>{subject.name}</td>
                                <td>{subject.slot}</td>
                                <td>{subject.room}</td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
                </div>
                <Link to="/schedule">
                    <div className="edit-float">
                        <i class="fas fa-edit"></i>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Schedule;