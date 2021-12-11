import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
