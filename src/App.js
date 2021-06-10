import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Home from './Components/pages/Home'
import Alert from './Components/layout/Alert'
import About from './Components/pages/About'
import User from './Components/users/user'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import NotFound from './Components/pages/NotFound'
import './App.css';



const App = () => {
    return (
      <GithubState>
        <AlertState>
            <Router>
              <div className="App">
                <Navbar  />
                <div className="container">
                  <Alert/>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={ About } />
                    <Route exact path='/user/:login' component={ User } />
                    <Route component={NotFound} />
                  </Switch> 
                </div>
              </div>
            </Router>
          </AlertState>
      </GithubState>
    )
  }

export default App
