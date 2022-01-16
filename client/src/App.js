import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { Auth, Admin, Student, Teacher, Schedule } from './screens'
import { Settings } from "./screens/shared";
import {useUserContext} from './store/UserStore';


const userAllowedMap = {
  1: ['/admin',  '/schedule', 'settings'],
  2: ['/teacher', 'settings'],
  3: ['/student', 'settings']
}
 

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useUserContext();
  const isUserAllowed = user && userAllowedMap[user.role].includes(rest.path);
  const redirectPath = user ? userAllowedMap[user.role][0] : '/auth';


  return (
    <Route
      {...rest}
      render={(props) =>
        isUserAllowed ? <Component {...props} /> : <Redirect to={redirectPath} />
      }
    />
  );
}
  

function App() {
  const { user } = useUserContext();

  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to={'/auth'} />
          </Route>
          <Route path="/auth" render={() => {
            if (user) {
              const redirectPath = userAllowedMap[user.role][0];
              return <Redirect to={redirectPath} />
            }
            return <Auth />
          }}/>
          <PrivateRoute path="/admin" component={Admin}/>
          <PrivateRoute path="/student" component={Student}/>
          <PrivateRoute path="/teacher" component={Teacher}/>
          <PrivateRoute path="/schedule" component={Schedule}/>
          <PrivateRoute path="/settings" component={Settings}/>
       
        </Switch>
      </Router>
  );
}

export default App;
