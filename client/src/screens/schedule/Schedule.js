import { Switch, Route} from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";

import './schedule.css';

function Schedule(){
    return(
        <>
            <Switch>
                <Route exact path="/schedule" component={Edit} />                   
                <Route exact path="/schedule/create" component={Create} />                   
            </Switch> 
        </>
    )
}

export default Schedule;