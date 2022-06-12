import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo-dark.png";
import SubjectService from "../../../store/action/subject.service";
import UserService from "../../../store/action/user.service";

function Create(){
    const [stepNumber, setStepNumber] = useState(0);

    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [slots, setSlots] = useState([]);
    const [priorityShow, setPriorityShow] = useState(false);

    const handleSubjectClick = (index) => {
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
                    isSelectedL: false,
                    room: "",
                    date: "",
                    slot: "",
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


    return(
        <>
            { priorityShow && <div className="priority box-shadow">
                <div className="col-md-10 mt-3">
                    <h4 className="text-left">Fill Details</h4>
                    <div className="row">
                        <div className="col">
                            <select class="form-control">
                                <option selected>Select Teacher</option>
                                {teachers.map(teacher => { return <option>{teacher.fullName}</option> })}
                            </select>
                        </div>
                        <div className="col">
                            <select class="form-control">
                                <option selected>Select Room</option>
                                {rooms.map(room => { return <option>{room.name}</option> })}
                            </select>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <select class="form-control">
                                <option selected>Select Slot</option>
                                {slots.map(slot => { return <option>{slot.start} - {slot.end}</option> })}
                            </select>
                        </div>
                        <div className="col">
                            <div class="form-group">
                                <input type="text" class="form-control-file" onFocus={(e) => (e.currentTarget.type = "date")} placeholder="Select Date"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row-reverse mt-5">
                        <button className="custom-btn background-blue" onClick={() => setPriorityShow(false)}>Set</button>
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
                                        <input type="text" class="form-control" placeholder="e.g. Mid Term Fall 19"/>
                                    </div>
                                </div>
                                <div class="row mx-0">
                                    <div class="col">
                                        <label class="form-label">Starting Date</label>
                                        <input type="date" class="form-control"/>
                                    </div>
                                    <div class="col">
                                        <label class="form-label">Ending Date</label>
                                        <input type="date" class="form-control"/>
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
                    <div className="col-md-4">
                       
                    </div>
                    <div className="navigation">
                        { stepNumber !== 0 && <button className="custom-btn me-3 text-black-50" onClick={() => setStepNumber(stepNumber - 1)}>Previous</button>}
                        { stepNumber !== 2 && <button className="custom-btn background-blue" onClick={() => setStepNumber(stepNumber + 1)} >Next</button>}
                        { stepNumber === 2 && <Link to="/admin"><button className="custom-btn background-blue">Finish</button></Link>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;