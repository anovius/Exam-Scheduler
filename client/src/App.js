import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { Auth, Admin, Student, Teacher, Schedule } from './screens'
import Subject from "./screens/subject/Subject";
import {useUserContext} from './store/UserStore';


const userAllowedMap = {
  1: ['/admin',  '/schedule'],
  2: ['/teacher'],
  3: ['/student'],
  4: ['/student']
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
          <PrivateRoute path="/student" component={Subject}/>
          <PrivateRoute path="/schedule" component={Schedule}/>
       
        </Switch>
      </Router>
  );
}

export default App;
