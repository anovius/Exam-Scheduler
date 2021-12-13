import { useState } from "react";

function Create(){
    const [stepNumber, setStepNumber] = useState(0);

    return(
        <>
            <div className="schedule-container">
                <div className="col-md-6 wizard box-shadow">
                    <div className="main">
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