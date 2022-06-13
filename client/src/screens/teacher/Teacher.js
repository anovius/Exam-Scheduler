import { Route, Switch } from 'react-router';

import { Sidebar, Schedule } from './components';
import { Notifications, Settings, Header, Complaints, AddComplaint } from '../shared';
import Attendance from './components/Attendance';

function Teacher(){
    return(
        <>
            <Header link="/teacher/settings"/>
            <div className="container-fluid">
              <div className="row">
                <div className="sidebar box-shadow">
                  <Sidebar />
                </div>
                <div className="col">
                  <div className="center-container">
                    <Switch>
                      <Route exact path="/teacher" component = {Schedule} />
                      <Route exact path="/teacher/attendance/:className" component = {Attendance} />
                      <Route exact path="/teacher/complaints" component = {Complaints} />
                      <Route exact path="/teacher/notifications" component = {Notifications} />
                      <Route exact path="/teacher/settings" component = {Settings} />
                      <Route exact path="/teacher/complaints/add" component = {AddComplaint} />
                    </Switch>
                  </div>
                  </div>
              </div>
            </div>
        </>
    );
}

export default Teacher;