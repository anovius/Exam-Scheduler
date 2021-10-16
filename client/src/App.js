import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Auth} from './screens'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/auth" component={Auth}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
