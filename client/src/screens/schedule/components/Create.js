import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo-dark.png";

function Create(){
    const [stepNumber, setStepNumber] = useState(0);
    var subjects = [
        {
            name: "PF",
            isSelected: false
        },
        {
            name: "COAL",
            isSelected: false
        },
        {
            name: "OOP",
            isSelected: false
        },
        {
            name: "DSA",
            isSelected: false
        },
        {
            name: "DBMS",
            isSelected: false
        },
        {
            name: "OS",
            isSelected: false
        },
        {
            name: "SP",
            isSelected: false
        },
        {
            name: "CA",
            isSelected: false
        },
        {
            name: "AOA",
            isSelected: false
        },
        {
            name: "TOA",
            isSelected: false
        },
        {
            name: "Compiler",
            isSelected: false
        },
        {
            name: "PM",
            isSelected: false
        },
        {
            name: "TBW",
            isSelected: false
        },

    ];

    const [subjectsSelected, setSubjectsSelected] = useState(subjects);

    const handleSubjectClick = (index) => {
        setSubjectsSelected(
            subjectsSelected.map((subject, i) => 
                i === index ? {...subject, isSelected: !subject.isSelected} : subject
            )
        );
    }

    var teachers = [
        {
            name: "Abc",
            isSelected: false
        },
        {
            name: "Lorem",
            isSelected: false
        },
        {
            name: "Ipsum",
            isSelected: false
        },
        {
            name: "Xyz",
            isSelected: false
        },
        {
            name: "JKL",
            isSelected: false
        },{
            name: "Abc",
            isSelected: false
        },
        {
            name: "Lorem",
            isSelected: false
        },
    ];

    const [teachersSelected, setTeachersSelected] = useState(teachers);

    const handleTeacherClick = (index) => {
        setTeachersSelected(
            teachersSelected.map((teacher, i) => 
                i === index ? {...teacher, isSelected: !teacher.isSelected} : teacher
            )
        );
    }

    const [priorityShow, setPriorityShow] = useState(false);

    return(
        <>
            { priorityShow && <div className="priority box-shadow">
                <div className="col-md-10 mt-3">
                    <h4 className="text-center">Select Priority</h4>
                    <input type="range" class="form-range" min="1" max="6"></input>
                    <div className="d-flex flex-row-reverse mt-5">
                        <button className="custom-btn background-blue" onClick={() => setPriorityShow(false)}>Set</button>
                    </div>
                </div>
            </div>}
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
                                    { subjectsSelected.map((subject, index) => 
                                            <div className={subject.isSelected? 'pill-active': 'pill'} onClick={() => handleSubjectClick(index)} onDoubleClick={()=> setPriorityShow(true)}>
                                                {subject.name}
                                            </div>
                                        )}
                                </div>
                            </div> }

                            { stepNumber === 2 && <div>
                                <h3 className="ms-4 mb-4">Teachers & Faculty</h3>
                                <div className="row mx-0">
                                    { teachersSelected.map((teacher, index) => 
                                            <div className={teacher.isSelected? 'pill-active': 'pill'} onClick={() => handleTeacherClick(index)}>
                                                {teacher.name}
                                            </div>
                                        )}
                                </div>
                            </div> }

                            { stepNumber === 3 && <div>
                                <h3 className="ms-4 mb-4">Rooms & Slots</h3>
                                <div className="row mx-0">
                                    { teachersSelected.map((teacher, index) => 
                                            <div className={teacher.isSelected? 'pill-active': 'pill'} onClick={() => handleTeacherClick(index)}>
                                                {teacher.name}
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
                        { stepNumber !== 3 && <button className="custom-btn background-blue" onClick={() => setStepNumber(stepNumber + 1)} >Next</button>}
                        { stepNumber === 3 && <Link to="/admin"><button className="custom-btn background-blue">Finish</button></Link>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;