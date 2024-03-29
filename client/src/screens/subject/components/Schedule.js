function Schedule() {
    return(
        <>
            <div className="col-md-11 table-container box-shadow" align="center">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-date">
                        <i className="fas fa-calendar-week me-2"></i>
                        14-10-2021 - 22-10-2021
                    </div>
                </div>

                <div className='d-flex justify-content-between align-items-center mt-4 px-4'>
                    <div className="schedule-title ">
                        BSCS Session Fall 2018
                    </div>
                </div>
                <div className="custom-table">
                  <table className="table">
                    <thead className="box-shadow-bottom">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Day</th>
                        <th scope="col">Course</th>
                        <th scope="col">Time</th>
                        <th scope="col">Room</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-data">
                        <td>14-10-2021</td>
                        <td>Monday</td>
                        <td>Data Structures</td>
                        <td>12:00 PM</td>
                        <td>A24</td>
                        <td> <i className="fas fa-clipboard-list"></i></td>
                    </tr>
                    <tr className="table-data">
                        <td>14-10-2021</td>
                        <td>Monday</td>
                        <td>Data Structures</td>
                        <td>12:00 PM</td>
                        <td>A24</td>
                        <td> <i className="fas fa-clipboard-list"></i></td>
                    </tr>
                    <tr className="table-data">
                        <td>14-10-2021</td>
                        <td>Monday</td>
                        <td>Data Structures</td>
                        <td>12:00 PM</td>
                        <td>A24</td>
                        <td> <i className="fas fa-clipboard-list"></i></td>
                    </tr>
                    <tr className="table-data active">
                        <td>14-10-2021</td>
                        <td>Monday</td>
                        <td>Data Structures</td>
                        <td>12:00 PM</td>
                        <td>A24</td>
                        <td> <i className="fas fa-clipboard-list"></i></td>
                    </tr>
                    <tr className="table-data">
                        <td>14-10-2021</td>
                        <td>Monday</td>
                        <td>Data Structures</td>
                        <td>12:00 PM</td>
                        <td>A24</td>
                        <td> <i className="fas fa-clipboard-list"></i></td>
                    </tr>
                    <tr className="table-data">
                        <td>14-10-2021</td>
                        <td>Monday</td>
                        <td>Data Structures</td>
                        <td>12:00 PM</td>
                        <td>A24</td>
                        <td> <i className="fas fa-clipboard-list"></i></td>
                    </tr>
                </tbody>
                </table>
                </div>
            </div>
        </>
    );
}

export default Schedule;