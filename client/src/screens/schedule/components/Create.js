import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import logo from "../../../assets/logo-dark.png";
import ScheduleService from "../../../store/action/schedule.service";
import SubjectService from "../../../store/action/subject.service";
import UserService from "../../../store/action/user.service";

function Create(){
    const history = useHistory();
    const [stepNumber, setStepNumber] = useState(0);
    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [slots, setSlots] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [title, setTitle] = useState(null);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [selected, setSelected] = useState([]);

    const handleSubjectClick = (index) => {
        setSelectedIndex(index);
        setSubjects(
            subjects.map((subject, i) => 
                i === index ? {...subject, isSelected: !subject.isSelected} : subject
            )
        );
    }

    useEffect(() => {
        SubjectService.getSubjects().then(res => {
            let data = [];

            res.data.data.forEach(subject => {
                data.push({
                    name: subject.name,
                    isSelected: false,
                    room: "",
                    date: "",
                    slot: "",
                    teacher: "",
                    className: subject.class
                })
            })
            setSubjects(data);
        });

        UserService.getRooms().then(res => {
            setRooms(res.data.data);
        })

        UserService.getSlots().then(res => {
            setSlots(res.data.data);
        })

        UserService.getTeachers().then(res => {
            setTeachers(res.data.data);
        })
    }, [])

    const onSubmit = () => {
        let data = [];
        subjects.forEach(subject => {
            if(subject.isSelected){
                data.push({
                    name: subject.name,
                    room: subject.room,
                    date: subject.date,
                    slot: subject.slot,
                    teacher: subject.teacher,
                    className: subject.className
                })
            }
        })

        ScheduleService.create({title: title, start: start, end: end, subjects: data}).then(res => {
            Swal.fire({
                title: "Success",
                text: "Schedule created successfully",
                icon: "success",
                confirmButtonText: "OK"
            });
        })

        history.push("/admin");
    }

    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    Date.prototype.toString = function() {
        console.log(this.getFullYear() + "-0" + (this.getMonth() + 1) + "-" + this.getDate());
        return this.getFullYear() + "-0" + (this.getMonth() + 1) + "-" + this.getDate();
    }


    const autoFill = () => {
        let selectedSubjects = subjects.filter(subject => subject.isSelected);
        let data = [];
        selectedSubjects.map(subject => {
            if(data[subject.className]){
                data[subject.className].push(subject);
            }
            else{
                data[subject.className] = [subject];
            }
        })

        let slotIndex = 0;
        let teacherIndex = 0;
        let roomIndex = 0;
        let dateIndex = 0;
        let dataIndex = 0;
        let currentIndex = 0;

        for(let i = 0; i < selectedSubjects.length; i++){
            if(roomIndex >= rooms.length) roomIndex = 0;
            if(teacherIndex >= teachers.length) teacherIndex = 0;
            if(slotIndex >= slots.length) slotIndex = 0;
            if(dateIndex >= end - start) dateIndex = 0;
            if(dataIndex >= Object.keys(data).length) {
                dataIndex = 0;
                currentIndex++;
                dateIndex++;
                slotIndex++;
            }

            let key = Object.keys(data)[dataIndex];
            if(data[key][currentIndex]){
                data[key][currentIndex].room = rooms[roomIndex].name;
                data[key][currentIndex].teacher = teachers[teacherIndex].fullName;
                data[key][currentIndex].slot = slots[slotIndex].start + ' - ' + slots[slotIndex].end;
                data[key][currentIndex].date = addDays(start, dateIndex);
                console.log(addDays(start, dateIndex).toString(), dateIndex);
                teacherIndex++;
                dataIndex++;
            }
            else{
                dataIndex++;
            }
        }
        
        let temp = [];
        let keys = Object.keys(data);
        keys.forEach(key => {
            temp.push(...data[key]);
        })
        console.log(temp);
        setSelected(temp);
    }

    const onRoomChange = (index, value) => {
        let temp = [...selected];
        temp[index].room = value;
        setSelected(temp);
    }

    const onTeacherChange = (index, value) => {
        let temp = [...selected];
        temp[index].teacher = value;
        setSelected(temp);
    }

    const onSlotChange = (index, value) => {
        let temp = [...selected];
        temp[index].slot = value;
        setSelected(temp);
    }

    const onDateChange = (index, value) => {
        let temp = [...selected];
        temp[index].date = value;
        setSelected(temp);
    }


    return(
        <>
            <div className="schedule-container">
                <div className="col-md-12 wizard box-shadow d-flex">
                    <div className="main col-md-12">
                        <img src={logo} alt="logo" className="logo"/>
                        <form>
                            { stepNumber === 0 && <div>
                                <h3 className="ms-4 mb-4">Schedule Details</h3>
                                <div class="row mx-0 mb-3">
                                    <div class="col-md-8">
                                        <label class="form-label">Title</label>
                                        <input type="text" class="form-control" placeholder="e.g. Mid Term Fall 19" onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    
                                </div>
                                <div class="row mx-0">
                                    <div class="col-md-4">
                                        <label class="form-label mt-3">Starting Date</label>
                                        <input type="date" class="form-control"  onChange={(e) => setStart(e.target.value)} />
                                    </div>
                                    <div class="col-md-4">
                                        <label class="form-label mt-3">Ending Date</label>
                                        <input type="date" class="form-control"  onChange={(e) => setEnd(e.target.value)} />
                                    </div>
                                </div>
                            </div> }

                            { stepNumber === 1 && <div>
                                <h3 className="ms-4 mb-4">Subjects</h3>
                                <div className="row mx-0" id="subject">
                                    { subjects.map((subject, index) => 
                                            <div className={subject.isSelected? 'pill-active': 'pill'} onClick={() => {handleSubjectClick(index);}}>
                                                {subject.name} - {subject.className}
                                            </div>
                                        )}
                                </div>
                            </div> }

                            { stepNumber === 2 && <div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Subject</th>
                                            <th scope="col">Room</th>
                                            <th scope="col">Teacher</th>
                                            <th scope="col">Slot</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { selected.map((subject, index) =>
                                            <tr>
                                                <td>{subject.name}</td>
                                                <td>
                                                    <select class="form-control" value={subject.room} onChange={(e) => onRoomChange(index, e.target.value)}>
                                                        { rooms.map((room, index) =>
                                                            <option value={room.name}>{room.name}</option>
                                                        )}
                                                    </select>
                                                </td>
                                                <td>
                                                    <select class="form-control" value={subject.teacher}  onChange={(e) => onTeacherChange(index, e.target.value)}>
                                                        { teachers.map((teacher, index) =>
                                                            <option value={teacher.fullName}>{teacher.fullName}</option>
                                                        )}
                                                    </select>
                                                </td>
                                                <td>
                                                    <select class="form-control" value={subject.slot}  onChange={(e) => onSlotChange(index, e.target.value)}>
                                                        { slots.map((slot, index) =>
                                                            <option value={slot.start + ' - ' + slot.end}>{slot.start + ' - ' + slot.end}</option>
                                                        )}
                                                    </select>
                                                </td>
                                                <td>
                                                    <input type="date" class="form-control" value={subject.date.toString()} min = {start} max = {end}  onChange={(e) => onDateChange(index, e.target.value)} />
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div> }
                            
                        </form>
                    </div>
                    <div className="navigation">
                        { stepNumber !== 0 && <button className="custom-btn me-3 text-black-50" onClick={() => setStepNumber(stepNumber - 1)}>Previous</button>}
                        { stepNumber !== 2 && <button className="custom-btn background-blue" onClick={() => {if(stepNumber === 1) autoFill(); setStepNumber(stepNumber + 1);}} >Next</button>}
                        { stepNumber === 2 && <button className="custom-btn background-blue" onClick={onSubmit}>Finish</button>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;