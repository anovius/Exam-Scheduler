import { Route, Switch } from 'react-router';

import { Sidebar, Schedule, Complaints } from './components';
import { Notifications, Settings, Header } from '../shared';

function Subject(){
    return(
        <>
            <Header link="/subject/settings"/>
            <div className="container-fluid">
              <div className="row">
                <div className="sidebar box-shadow">
                  <Sidebar />
                </div>
                <div className="col">
                  <div className="center-container">
                    <Switch>
                      <Route exact path="/subject" component = {Schedule} />
                      <Route exact path="/subject/complaints" component = {Complaints} />
                      <Route exact path="/subject/notifications" component = {Notifications} />
                      <Route exact path="/subject/settings" component = {Settings} />
                    </Switch>
                  </div>
                  </div>
              </div>
            </div>
        </>
    );
}

export default Subject;