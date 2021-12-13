import { useState } from "react";

import logo from "../../../assets/logo-dark.png";

function Create(){
    const [stepNumber, setStepNumber] = useState(0);

    return(
        <>
            <div className="schedule-container">
                <div className="col-md-6 col-12 wizard box-shadow d-flex">
                    <div className="main col-md-8">
                        <img src={logo} alt="logo" className="logo"/>
                        <h3 className="ms-4 mb-4">Schedule Details</h3>
                        <form>
                            <div class="row mx-0 mb-3">
                            <div class="col">
                                <label class="form-label">Title</label>
                                <input type="text" class="form-control" placeholder="e.g. Mid Term Fall 19"/>
                            </div>
                            </div>
                            <div class="row mx-0">
                                <div class="col">
                                    <label class="form-label">Starting Date</label>
                                    <input type="text" class="form-control"/>
                                </div>
                                <div class="col">
                                    <label class="form-label">Ending Date</label>
                                    <input type="text" class="form-control"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                       
                    </div>
                    <div className="navigation">
                        { stepNumber !== 0 && <button className="custom-btn me-3 text-black-50" onClick={() => setStepNumber(stepNumber - 1)}>Previous</button>}
                        { stepNumber !== 3 && <button className="custom-btn background-blue" onClick={() => setStepNumber(stepNumber + 1)} >Next</button>}
                        { stepNumber === 3 && <button className="custom-btn background-blue" onClick={() => setStepNumber(stepNumber + 1)} >Finish</button>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;