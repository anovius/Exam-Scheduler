import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { Auth, Admin } from './screens'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/admin" component={Admin}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
