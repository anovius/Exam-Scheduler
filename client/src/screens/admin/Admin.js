import { Switch, Route } from 'react-router';

import { Sidebar, Header, Schedule, Complaints, Classes, Students, Teachers, Faculty  } from './components';
import './admin.css';

function Admin() {
  return (
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
                <Route exact path="/admin" component = {Schedule} />
                <Route exact path="/admin/complaints" component = {Complaints} />
                <Route exact path="/admin/classes" component = {Classes} />
                <Route exact path="/admin/students" component = {Students} />
                <Route exact path="/admin/teachers" component = {Teachers} />
                <Route exact path="/admin/faculty" component = {Faculty} />
              </Switch>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}


export default Admin;