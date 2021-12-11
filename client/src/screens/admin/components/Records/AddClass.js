import Upload from "../../../shared/Upload";

function AddClass(){
    return (
        <>
            <div className="col-md-3 add-container" align="center">
                <h5>Add New Class</h5>
                <p>You can manually add data one by one or can upload multiple using a CSV file</p>
                <hr/>
                <div className="add-form">
                    <form>  
                    <div className="form-group">
                        <label> <i className="fas fa-graduation-cap"></i> Degree</label><br/>
                        <input type="text" placeholder="eg: Computer Science" />
                    </div>  
                    <div className="form-group">
                        <label> <i className="fas fa-calendar-alt"></i> Year</label><br/>
                        <input type="text" placeholder="eg: 2018" />
                    </div>  
                    <div className="form-group">
                        <label> <i className="fas fa-users-class"></i> Section</label><br/>
                        <input type="text" placeholder="eg: Afternoon" />
                    </div>
                    <button type="button" className="submit background-green mt-4 mb-3"> Add Class</button> 
                    </form>
                </div>
                <Upload/>
            </div>
        </>
    );
}

export default AddClass;