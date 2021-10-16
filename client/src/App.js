import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Auth} from './screens'

function NotFound(){
  return <h1>404 Not Found</h1>
}

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
