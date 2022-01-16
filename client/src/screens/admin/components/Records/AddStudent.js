import Upload from "../../../shared/Upload";

function AddStudent(){
    return (
        <>
            <div className="col-md-3 add-container" align="center">
                <h5>Add New Student</h5>
                <p>You can manually add data one by one or can upload multiple using a CSV file</p>
                <hr/>
                <div className="add-form">
                    <form>  
                    <div className="form-group">
                        <label> <i className="fas fa-user"></i> Name</label><br/>
                        <input type="text" placeholder="eg: Junaid Zubair" />
                    </div>  
                    <div className="form-group">
                        <label> <i className="fas fa-clipboard-list"></i> Roll Number</label><br/>
                        <input type="text" placeholder="eg: BCSF18A511" />
                    </div>  
                    <div className="form-group">
                        <label> <i className="fas fa-envelope"></i> Email</label><br/>
                        <input type="email" placeholder="eg: bcsf18a511@pucit.edu.pk" />
                    </div>
                    <button type="button" className="submit background-green mt-4 mb-3"> Add Student</button> 
                    </form>
                </div>
                <Upload/>
            </div>
        </>
    );
}

export default AddStudent;