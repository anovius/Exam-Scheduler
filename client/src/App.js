import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import { Auth, Admin, Student, Teacher } from './screens'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/student" component={Student}/>
          <Route path="/teacher" component={Teacher}/>
          <Route exact path="/">
            <Redirect to="/auth" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
