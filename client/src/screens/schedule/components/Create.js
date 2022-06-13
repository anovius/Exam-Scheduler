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
    const [priorityShow, setPriorityShow] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [title, setTitle] = useState(null);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);

    const handleSubjectClick = (index) => {
        setSelectedIndex(index);
        setSubjects(
            subjects.map((subject, i) => 
                i === index ? {...subject, isSelected: !subject.isSelected} : subject
            )
        );
    }


    const handleCheck = () => {
        let check = subjects.find(subject => subject.teacher === selectedTeacher && subject.slot === selectedSlot && subject.date === selectedDate);
        if(check){
            Swal.fire({
                title: "Error",
                text: "Conflict with same teacher, date and slot",
                icon: "error",
                confirmButtonText: "OK"
            });
            return false;
        }

        let check2 = subjects.find(subject => subject.room === selectedRoom && subject.date === selectedDate && subject.slot === selectedSlot);
        if(check2){
            Swal.fire({
                title: "Error",
                text: "Selected Room is not Available",
                icon: "error",
                confirmButtonText: "OK"
            });
            return false;
        }

        return true;

    }

    const handleSet = () => {
        if(!handleCheck()){
            return;
        }
        if(selectedTeacher && selectedRoom && selectedSlot && selectedDate){
            setPriorityShow(false)
            setSubjects(
                subjects.map((subject, i) =>
                    i === selectedIndex ? {...subject, room: selectedRoom, teacher: selectedTeacher, slot: selectedSlot, date: selectedDate} : subject
                )
            );

            setSelectedTeacher(null);
            setSelectedRoom(null);
            setSelectedSlot(null);
            setSelectedDate(null);
        }
        else{
            return;
        }
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


    return(
        <>
            { priorityShow && <div className="priority box-shadow">
                <div className="col-md-10 mt-3">
                    <h4 className="text-left">Fill Details</h4>
                    <div className="row">
                        <div className="col">
                            <select class="form-control" onChange={(e) => {setSelectedTeacher(e.target.value)}}>
                                <option selected>Select Teacher</option>
                                {teachers.map(teacher => { return <option>{teacher.fullName}</option> })}
                            </select>
                        </div>
                        <div className="col">
                            <select class="form-control" onChange={(e) => {setSelectedRoom(e.target.value)}}>
                                <option selected>Select Room</option>
                                {rooms.map(room => { return <option>{room.name}</option> })}
                            </select>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <select class="form-control" onChange={(e) => {setSelectedSlot(e.target.value)}}>
                                <option selected>Select Slot</option>
                                {slots.map(slot => { return <option>{slot.start} - {slot.end}</option> })}
                            </select>
                        </div>
                        <div className="col">
                            <div class="form-group">
                                <input type="text" class="form-control-file" onFocus={(e) => (e.currentTarget.type = "date")} onChange={(e) => {setSelectedDate(e.target.value)}} min={start} max={end} placeholder="Select Date"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row-reverse mt-5">
                        <button className="custom-btn background-blue" onClick={handleSet}>Set</button>
                    </div>
                </div>
            </div> }
            <div className="schedule-container">
                <div className="col-md-6 col-12 wizard box-shadow d-flex">
                    <div className="main col-md-8">
                        <img src={logo} alt="logo" className="logo"/>
                        <form>
                            { stepNumber === 0 && <div>
                                <h3 className="ms-4 mb-4">Schedule Details</h3>
                                <div class="row mx-0 mb-3">
                                    <div class="col">
                                        <label class="form-label">Title</label>
                                        <input type="text" class="form-control" placeholder="e.g. Mid Term Fall 19" onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                </div>
                                <div class="row mx-0">
                                    <div class="col">
                                        <label class="form-label">Starting Date</label>
                                        <input type="date" class="form-control"  onChange={(e) => setStart(e.target.value)} />
                                    </div>
                                    <div class="col">
                                        <label class="form-label">Ending Date</label>
                                        <input type="date" class="form-control"  onChange={(e) => setEnd(e.target.value)} />
                                    </div>
                                </div>
                            </div> }

                            { stepNumber === 1 && <div>
                                <h3 className="ms-4 mb-4">Subjects</h3>
                                <div className="row mx-0" id="subject">
                                    { subjects.map((subject, index) => 
                                            <div className={subject.isSelected? 'pill-active': 'pill'} onClick={() => {handleSubjectClick(index); !subject.isSelected && setPriorityShow(true);}}>
                                                {subject.name}
                                            </div>
                                        )}
                                </div>
                            </div> }
                            
                        </form>
                    </div>
                    <div className="navigation">
                        { stepNumber !== 0 && <button className="custom-btn me-3 text-black-50" onClick={() => setStepNumber(stepNumber - 1)}>Previous</button>}
                        { stepNumber !== 1 && <button className="custom-btn background-blue" onClick={() => setStepNumber(stepNumber + 1)} >Next</button>}
                        { stepNumber === 1 && <button className="custom-btn background-blue" onClick={onSubmit}>Finish</button>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;