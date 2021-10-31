function AddTeacher(){
    return (
        <>
            <div className="col-md-3 add-container" align="center">
                <h5>Add New Teacher</h5>
                <p>You can manually add data one by one or can upload multiple using a CSV file</p>
                <hr/>
                <div className="add-form">
                    <form>  
                    <div className="form-group">
                        <label> <i className="fas fa-user"></i> Name</label><br/>
                        <input type="text" placeholder="eg: Junaid Zubair" />
                    </div>
                    <div className="form-group">
                        <label> <i className="fas fa-envelope"></i> Email</label><br/>
                        <input type="email" placeholder="eg: teacher@pucit.edu.pk" />
                    </div>
                    <div className="form-group">
                        <label> <i className="fas fa-phone-alt"></i> Phone</label><br/>
                        <input type="text" placeholder="eg: 0321-2312314" />
                    </div>  
                    <button type="button" className="submit background-green mt-4 mb-3"> Add Teacher</button> 
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddTeacher;