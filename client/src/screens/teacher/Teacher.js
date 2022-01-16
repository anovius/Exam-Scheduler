import { Route, Switch } from 'react-router';

import { Sidebar, Schedule, Complaints } from './components';
import { Notifications, Settings, Header } from '../shared';

function Teacher(){
    return(
        <>
            <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar box-shadow">
            <Sidebar />
          </div>
          <div className="col">
            <div className="center-container">
              <Switch>
                <Route exact path="/teacher" component = {Schedule} />
                <Route exact path="/teacher/complaints" component = {Complaints} />
                <Route exact path="/teacher/notifications" component = {Notifications} />
              </Switch>
            </div>
            </div>
        </div>
      </div>
        </>
    );
}

export default Teacher;