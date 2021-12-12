import { Switch, Route} from "react-router-dom";
import Edit from "./components/Edit";

import './schedule.css';

function Schedule(){
    return(
        <>
            <Switch>
                <Route exact path="/schedule" component={Edit} />                   
            </Switch> 
        </>
    )
}

export default Schedule;