function Schedule() {
    return(
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Filters</h5>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex justify-content-left '>
                                <div className="form-check me-4">
                                    <input className="form-check-input" type="radio" name="degree" ></input>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        CS
                                    </label>
                                </div>
                                <div className="form-check me-4" >
                                    <input className="form-check-input" type="radio" name="degree" id="flexRadioDefault2" checked></input>
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        SE
                                    </label>
                                </div>
                                <div className="form-check me-4">
                                    <input className="form-check-input" type="radio" name="degree" id="flexRadioDefault2"></input>
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        IT
                                    </label>
                                </div>
                            </div>
                            <div className='d-flex justify-content-left mt-4'>
                                <div className="form-check me-4">
                                    <input className="form-check-input" type="radio" name="section" ></input>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Morning
                                    </label>
                                </div>
                                <div className="form-check me-4 mb-2" >
                                    <input className="form-check-input" type="radio" name="section" id="flexRadioDefault2" checked></input>
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        Afternoon
                                    </label>
                                </div>
                            </div>
                            <div class="col-sm-4 ">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select year</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="custom-btn background-blue" data-dismiss="modal">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-11 table-container box-shadow" align="center">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-date">
                        <i className="fas fa-calendar-week me-2"></i>
                        14-10-2021 - 22-10-2021
                    </div>
                    <div>
                        <button className="custom-btn background-green">Create</button>
                    </div>
                </div>

                <div className='d-flex justify-content-between align-items-center mt-4 px-4'>
                    <div className="schedule-title ">
                        BSCS Session Fall 2018
                    </div>
                    <div>
                        <button className="custom-btn background-blue" data-toggle="modal" data-target="#exampleModal">Filter</button>
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
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-data">
                        <td>14-10-2021</td>
                        <td>Monday</td>
                        <td>Data Structures</td>
                        <td>12:00 PM</td>
                        <td> <i className="fas fa-clipboard-list"></i></td>
                    </tr>
                    <tr className="table-data">
                        <td>14-10-2021</td>
                        <td>Monday</td>
                        <td>Data Structures</td>
                        <td>12:00 PM</td>
                        <td> <i className="fas fa-clipboard-list"></i></td>
                    </tr>
                    <tr className="table-data">
                        <td>14-10-2021</td>
                        <td>Monday</td>
                        <td>Data Structures</td>
                        <td>12:00 PM</td>
                        <td> <i className="fas fa-clipboard-list"></i></td>
                    </tr>
                    <tr className="table-data active">
                        <td>14-10-2021</td>
                        <td>Monday</td>
                        <td>Data Structures</td>
                        <td>12:00 PM</td>
                        <td> <i className="fas fa-clipboard-list"></i></td>
                    </tr>
                    <tr className="table-data">
                        <td>14-10-2021</td>
                        <td>Monday</td>
                        <td>Data Structures</td>
                        <td>12:00 PM</td>
                        <td> <i className="fas fa-clipboard-list"></i></td>
                    </tr>
                    <tr className="table-data">
                        <td>14-10-2021</td>
                        <td>Monday</td>
                        <td>Data Structures</td>
                        <td>12:00 PM</td>
                        <td> <i className="fas fa-clipboard-list"></i></td>
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

export default Schedule;