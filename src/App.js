import './App.css';
import React, { Fragment } from 'react';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import Search from './component/users/Search';
import Alert from './component/layout/Alert';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './component/pages/About';
import User from './component/users/User';
import GithubState from './Context/github/GithubState'
import AlertState from './Context/alert/AlertState';
const  App = () => {
 return (
    <GithubState>
    <AlertState>
    <Router>
    <div>
      <Navbar/>
      <div className='container'>
        <Alert/>
        <Routes>
          <Route 
          exact
          path='/'
          element={
            <Fragment>
            < Search/>
           <Users/>
           </Fragment>
          }
          />
          <Route
            exact
            path='/About'
            element={<About/>}
          />
          <Route
          exact
          path='/user/:login'
          element={<User/>}
          />
     
      </Routes>
      </div>
    </div>
    </Router>
    </AlertState>
    </GithubState>
  );
}
export default App;
