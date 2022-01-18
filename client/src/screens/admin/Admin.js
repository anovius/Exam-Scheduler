import { Switch, Route } from 'react-router';

import { Sidebar, Schedule, Complaints, Classes, Students, Teachers, AddClass, AddStudent, AddTeacher, Others  } from './components';
import { Notifications, Settings, Header } from '../shared';
import './admin.css';
import Subjects from './components/Subjects';
import AddSubject from './components/Records/AddSubject';

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
                <Route exact path="/admin/subjects" component = {Subjects} />
                <Route exact path="/admin/students" component = {Students} />
                <Route exact path="/admin/teachers" component = {Teachers} />
                <Route exact path="/admin/others" component = {Others} />
                <Route exact path="/admin/notifications" component = {Notifications} />
                <Route exact path="/admin/settings" component = {Settings} />
                <Route exact path="/admin/classes/add" component = {AddClass} />
                <Route exact path="/admin/students/add" component = {AddStudent} />
                <Route exact path="/admin/subjects/add" component = {AddSubject} />
                <Route exact path="/admin/teachers/add" component = {AddTeacher} />
              </Switch>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}


export default Admin;