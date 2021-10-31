function AddFaculty(){
    return (
        <>
            <div className="col-md-3 add-container" align="center">
                <h5>Add New Faculty</h5>
                <p>You can manually add data one by one or can upload multiple using a CSV file</p>
                <hr/>
                <div className="add-form">
                    <form>  
                    
                    <button type="button" className="submit background-green mt-4 mb-3"> Add Faculty</button> 
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddFaculty;