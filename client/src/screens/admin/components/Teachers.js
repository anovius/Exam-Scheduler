import { Link } from "react-router-dom";
function Teachers() {
    return(
        <>
            
            <div className="col-md-11 table-container box-shadow" align="center">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-title m-2">
                        Teachers & Faculty
                    </div>
                    <div>
                    <Link to="/admin/teachers/add">
                            <button className="custom-btn background-green">Add</button>
                        </Link>
                    </div>
                </div>
                <div className="custom-table mt-4">
                  <table className="table">
                    <thead className="box-shadow-bottom">
                    <tr>
                        <th scope="col">Teacher Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Availability</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amateen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="color-danger">Not Available</td>
                    </tr>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amateen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="color-success">Available</td>
                    </tr>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amateen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="color-danger">Not Available</td>
                    </tr>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amateen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="color-success">Available</td>
                    </tr>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amateen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="color-success">Available</td>
                    </tr>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amateen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="color-danger">Not Available</td>
                    </tr>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amteen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="color-success">Available</td>
                    </tr>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amateen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="color-danger">Not Available</td>
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

export default Teachers;