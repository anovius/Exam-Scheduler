function AddComplaint(){
    return (
        <>
            <div className="col-md-8 add-container mt-4" align="center">
                <h5>Add Your Complain</h5>
                <p>You can add complain here.Administration will take furthur actions if required.</p>
                <div className="add-form">
                    <form>  
                    <div className="form-group">
                        <label> <i className="fas fa-graduation-cap"></i> Title</label><br/>
                        <input type="text"/>
                    </div>  
                    <div className="description-form">
                        <label> <i className="fas fa-comment"></i> Description</label><br/>
                        <textarea rows="10"></textarea>
                    </div>  
                    <button type="button" className="submit background-green mt-4 mb-3"> Submit</button> 
                    </form>
                </div>
            </div>
        </>
    );


}

export default AddComplaint;