import './App.css';
import React from 'react';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import HomePage from './Components/Homepage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {


  const [user,setLoginUser] = useState({})
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <HomePage setLoginUser ={setLoginUser}/> : <Login  setLoginUser ={setLoginUser}/>
            }
             
          </Route>
          <Route path="/login">
            <Login  setLoginUser ={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
