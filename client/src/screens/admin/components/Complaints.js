function Complaints() {
    return(
        <>
            <div className="col-md-11 table-container box-shadow" align="center">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-title m-2">
                        Complaints
                    </div>
                    <div>
                        <div className="search-container">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Search"></input>
                        </div>
                    </div>
                </div>
                <div className="custom-table mt-4">
                  <table className="table">
                    <thead className="box-shadow-bottom">
                    <tr>
                        <th scope="col">Roll no</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Status</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-data">
                        <td>Bcsf18a511</td>
                        <td>Computer Architecture</td>
                        <td className="color-info">Pending</td>
                        <td>12:00 PM</td>
                    </tr>
                    <tr className="table-data">
                        <td>Bcsf18a501</td>
                        <td>Operating System</td>
                        <td className="color-info">Pending</td>
                        <td>12:00 PM</td>
                    </tr>
                    <tr className="table-data">
                        <td>Bcsf18a530</td>
                        <td>Discrete Mathematics</td>
                        <td className="color-info">Pending</td>
                        <td>12:00 PM</td>
                    </tr>
                    <tr className="table-data">
                        <td>Bcsf18a514</td>
                        <td>Analysis of Algorithm</td>
                        <td className="color-success">Solved</td>
                        <td>12:00 PM</td>
                    </tr>
                    <tr className="table-data">
                        <td>Bcsf18a529</td>
                        <td>Basic Electronics</td>
                        <td className="color-info">Pending</td>
                        <td>12:00 PM</td>
                    </tr>
                    <tr className="table-data">
                        <td>Bcsf18a522</td>
                        <td>Computer Architecture</td>
                        <td className="color-info">Pending</td>
                        <td>12:00 PM</td>
                    </tr>
                    <tr className="table-data">
                        <td>Bcsf18a525</td>
                        <td>Web Engineering</td>
                        <td className="color-info">Pending</td>
                        <td>12:00 PM</td>
                    </tr>
                    <tr className="table-data">
                        <td>Bcsf18a517</td>
                        <td>Theory of Automata</td>
                        <td className="color-success">Solved</td>
                        <td>12:00 PM</td>
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

export default Complaints;