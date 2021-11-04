import { Route, Switch } from 'react-router';

import { Sidebar, Header, Schedule, Complaints } from './components';
import { Notifications, Settings } from '../shared';

function Student(){
    return(
        <>
            <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar box-shadow">
            <Sidebar />
          </div>
          <div className="col">
            <div className="admin-container">
              <Switch>
                <Route exact path="/student" component = {Schedule} />
                <Route exact path="/student/complaints" component = {Complaints} />
                <Route exact path="/student/notifications" component = {Notifications} />
                <Route exact path="/student/settings" component = {Settings} />
              </Switch>
            </div>
            </div>
        </div>
      </div>
        </>
    );
}

export default Student;