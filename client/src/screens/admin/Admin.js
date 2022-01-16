import { Switch, Route } from 'react-router';

import { Sidebar, Schedule, Complaints, Classes, Students, Teachers, Faculty, AddClass, AddStudent, AddTeacher, AddFaculty, Others  } from './components';
import { Notifications, Settings, Header } from '../shared';
import './admin.css';

function Admin() {
  return (
    <>
      <Header link="/admin/settings"/>
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar box-shadow">
            <Sidebar />
          </div>
          <div className="col">
            <div className="center-container">
              <Switch>
                <Route exact path="/admin" component = {Schedule} />
                <Route exact path="/admin/complaints" component = {Complaints} />
                <Route exact path="/admin/classes" component = {Classes} />
                <Route exact path="/admin/students" component = {Students} />
                <Route exact path="/admin/teachers" component = {Teachers} />
                <Route exact path="/admin/faculty" component = {Faculty} />
                <Route exact path="/admin/others" component = {Others} />
                <Route exact path="/admin/notifications" component = {Notifications} />
                <Route exact path="/admin/settings" component = {Settings} />
                <Route exact path="/admin/classes/add" component = {AddClass} />
                <Route exact path="/admin/students/add" component = {AddStudent} />
                <Route exact path="/admin/teachers/add" component = {AddTeacher} />
                <Route exact path="/admin/faculty/add" component = {AddFaculty} />
              </Switch>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}


export default Admin;