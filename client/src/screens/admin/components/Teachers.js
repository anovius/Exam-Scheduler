function Teachers() {
    return(
        <>
            
            <div className="col-md-11 table-container box-shadow" align="center">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-title">
                        Teachers
                    </div>
                    <div>
                        <button className="custom-btn background-green">Create</button>
                    </div>
                </div>
                <div className="table-responsive mt-4">
                  <table className="table table-responsive">
                    <thead className="box-shadow-bottom">
                    <tr>
                        <th scope="col">Teacher Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contant</th>
                        <th scope="col">Availibility</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amateen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="solved-color">Not Availiable</td>
                    </tr>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amateen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="pending-color">Availiable</td>
                    </tr>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amateen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="solved-color">Not Availiable</td>
                    </tr>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amateen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="pending-color">Availiable</td>
                    </tr>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amateen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="pending-color">Availiable</td>
                    </tr>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amateen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="solved-color">Not Availiable</td>
                    </tr>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amteen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="pending-color">Availiable</td>
                    </tr>
                    <tr className="table-data">
                        <td>Sir Abdul Mateen</td>
                        <td>amateen@pucit.edu.pk</td>
                        <td>+92345678910</td>
                        <td className="solved-color">Not Availiable</td>
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