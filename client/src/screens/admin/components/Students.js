import { Link } from "react-router-dom";
function Students() {
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
                        <th scope="col">Name</th>
                        <th scope="col">Degree</th>
                        <th scope="col">Section</th>
                        <th scope="col">Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-data">
                        <td>Saad Ali Khan</td>
                        <td>Computer Science</td>
                        <td>Afternoon</td>
                        <td>2018</td>
                    </tr>
                    <tr className="table-data">
                        <td>Saad Ali Khan</td>
                        <td>Computer Science</td>
                        <td>Afternoon</td>
                        <td>2018</td>
                    </tr> 
                    <tr className="table-data">
                        <td>Saad Ali Khan</td>
                        <td>Computer Science</td>
                        <td>Afternoon</td>
                        <td>2018</td>
                    </tr>
                     <tr className="table-data">
                        <td>Saad Ali Khan</td>
                        <td>Computer Science</td>
                        <td>Afternoon</td>
                        <td>2018</td>
                    </tr>
                     <tr className="table-data">
                        <td>Saad Ali Khan</td>
                        <td>Computer Science</td>
                        <td>Afternoon</td>
                        <td>2018</td>
                    </tr> 
                    <tr className="table-data">
                        <td>Saad Ali Khan</td>
                        <td>Computer Science</td>
                        <td>Afternoon</td>
                        <td>2018</td>
                    </tr>
                     <tr className="table-data">
                        <td>Saad Ali Khan</td>
                        <td>Computer Science</td>
                        <td>Afternoon</td>
                        <td>2018</td>
                    </tr>
                     <tr className="table-data">
                        <td>Saad Ali Khan</td>
                        <td>Computer Science</td>
                        <td>Afternoon</td>
                        <td>2018</td>
                    </tr>
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