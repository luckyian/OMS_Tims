import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from '../wrappers/PrivateRoute'
import { AuthProvider } from '../contexts/AuthContext'
import ScreenSize from '../contexts/ScreenSizeContext'

import HomePage from './Home_Page/HomePage.js'
import PickListPage from './Pick_List_Page/PickListPage.js'
import BloodSugarPage from './BloodSugarPage'
import Chip from './ChipMasterList'
import Store from './StoreMasterList'
import Signup from './authComponents/Signup'
import Login from './authComponents/Login'
import ResetPassword from './authComponents/ResetPassword'
import UpdateProfile from './authComponents/UpdateProfile'




function App() {

  return (
      <AuthProvider>
        <ScreenSize>
          <Router>
              <Switch>
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/signup' component={Signup} />
                  <Route exact path='/update-profile' component={UpdateProfile} />
                  <Route exact path='/reset-password' component={ResetPassword} />
                  <PrivateRoute exact path='/' component={HomePage} />
                  <PrivateRoute exact path='/picklist' component={PickListPage} />
                  <PrivateRoute exact path='/bloodsugar' component={BloodSugarPage} />
                  <PrivateRoute exact path='/chip' component={Chip} />
                  <PrivateRoute exact path='/store' component={Store} />
                 
                  
              </Switch>
          </Router>
        </ScreenSize>
      </AuthProvider>
  );
}


export default App;
