import { Link } from "react-router-dom";
function Faculty() {
    return(
        <>
            <div className="col-md-11 table-container box-shadow" align="center">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-title m-2">
                        Faculty
                    </div>
                    <div>
                    <Link to="/admin/faculty/add">
                            <button className="custom-btn background-green">Add</button>
                    </Link>
                    </div>
                </div>
                <div className="custom-table mt-4">
                  <table className="table">
                    <thead className="box-shadow-bottom">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-data">
                        <td>Mam Esha Aftab</td>
                        <td>Assistant Professor</td>
                        <td>Esha.Aftab@pucit.edu.pk</td>
                        <td>03xx-xxxxxxx</td>
                    </tr>
                    <tr className="table-data">
                        <td>Mam Esha Aftab</td>
                        <td>Assistant Professor</td>
                        <td>Esha.Aftab@pucit.edu.pk</td>
                        <td>03xx-xxxxxxx</td>
                    </tr> 
                    <tr className="table-data">
                        <td>Mam Esha Aftab</td>
                        <td>Assistant Professor</td>
                        <td>Esha.Aftab@pucit.edu.pk</td>
                        <td>03xx-xxxxxxx</td>
                    </tr>
                     <tr className="table-data">
                        <td>Mam Esha Aftab</td>
                        <td>Assistant Professor</td>
                        <td>Esha.Aftab@pucit.edu.pk</td>
                        <td>03xx-xxxxxxx</td>
                    </tr>
                     <tr className="table-data">
                        <td>Mam Esha Aftab</td>
                        <td>Assistant Professor</td>
                        <td>Esha.Aftab@pucit.edu.pk</td>
                        <td>03xx-xxxxxxx</td>
                    </tr> 
                    <tr className="table-data">
                        <td>Mam Esha Aftab</td>
                        <td>Assistant Professor</td>
                        <td>Esha.Aftab@pucit.edu.pk</td>
                        <td>03xx-xxxxxxx</td>
                    </tr>
                     <tr className="table-data">
                        <td>Mam Esha Aftab</td>
                        <td>Assistant Professor</td>
                        <td>Esha.Aftab@pucit.edu.pk</td>
                        <td>03xx-xxxxxxx</td>
                    </tr>
                     <tr className="table-data">
                        <td>Mam Esha Aftab</td>
                        <td>Assistant Professor</td>
                        <td>Esha.Aftab@pucit.edu.pk</td>
                        <td>03xx-xxxxxxx</td>
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

export default Faculty;