function Classes() {
    return(
        <>
           <div className="col-md-11 table-container box-shadow" align="center">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-title">
                        Classes
                    </div>
                    <div>
                        <button className="custom-btn background-green">Create</button>
                    </div>
                </div>
                <div className="table-responsive mt-4">
                  <table className="table table-responsive">
                    <thead className="box-shadow-bottom">
                    <tr>
                        <th scope="col">Degree</th>
                        <th scope="col">Year</th>
                        <th scope="col">Section</th>
                        <th scope="col">Strength</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-data">
                        <td>Computer Science</td>
                        <td>Fall 2018</td>
                        <td>Afternoon</td>
                        <td>40</td>
                    </tr>
                    <tr className="table-data">
                        <td>Computer Science</td>
                        <td>Fall 2018</td>
                        <td>Afternoon</td>
                        <td>40</td>
                    </tr>
                    <tr className="table-data">
                        <td>Computer Science</td>
                        <td>Fall 2018</td>
                        <td>Afternoon</td>
                        <td>40</td>
                    </tr>
                    <tr className="table-data">
                        <td>Computer Science</td>
                        <td>Fall 2018</td>
                        <td>Afternoon</td>
                        <td>40</td>
                    </tr>
                    <tr className="table-data">
                        <td>Computer Science</td>
                        <td>Fall 2018</td>
                        <td>Afternoon</td>
                        <td>40</td>
                    </tr>
                    <tr className="table-data">
                        <td>Computer Science</td>
                        <td>Fall 2018</td>
                        <td>Afternoon</td>
                        <td>40</td>
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

export default Classes;