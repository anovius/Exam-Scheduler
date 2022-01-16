import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClassService from "../../../store/action/class.service";

function Classes() {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        getClasses();
    }, []);

    function getClasses(){
        ClassService.getAll().then(res => {
            setClasses(res.data.data.docs);
        });
    }
    
    return(
        <>
           <div className="col-md-11 table-container box-shadow" align="center">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-title m-2">
                        Classes
                    </div>
                    <div>
                        <Link to="/admin/classes/add">
                            <button className="custom-btn background-green">Add</button>
                        </Link>
                    </div>
                </div>
                <div className="custom-table mt-4">
                  <table className="table">
                    <thead className="box-shadow-bottom">
                    <tr>
                        <th scope="col">Degree</th>
                        <th scope="col">Year</th>
                        <th scope="col">Section</th>
                    </tr>
                </thead>
                <tbody>

                {classes.map((c, i) =>
                    <tr className="table-data">
                        <td>{c.degree}</td>
                        <td>{c.year}</td>
                        <td>{c.section}</td>
                        <td><i class="fas fa-trash-alt"></i></td>
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

export default Classes;