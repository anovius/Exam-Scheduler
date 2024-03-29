import { Route, Switch } from 'react-router';

import { Sidebar, Schedule} from './components';
import { Notifications, Settings, Header, Complaints, AddComplaint } from '../shared';

function Student(){
    return(
        <>
          <Header link="/student/settings"/>
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar box-shadow">
                <Sidebar />
              </div>
              <div className="col">
                <div className="center-container">
                  <Switch>
                    <Route exact path="/student" component = {Schedule} />
                    <Route exact path="/student/complaints" component = {Complaints} />
                    <Route exact path="/student/notifications" component = {Notifications} />
                    <Route exact path="/student/settings" component = {Settings} />
                    <Route exact path="/student/complaints/add" component = {AddComplaint} />
                  </Switch>
                </div>
                </div>
            </div>
          </div>
        </>
    );
}

export default Student;