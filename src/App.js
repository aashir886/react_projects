import React, { Component } from 'react'
import Navbar from './components/Layout/Navbar'
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

export class App extends Component {

  state = {
    users: [],
    loading: false
  }

 async componentDidMount () {
   this.setState( { loading: true } );
   const res = await axios.get( 'https://api.github.com/users' )
   this.setState( { users: res.data } )
   this.setState( { loading: false } );
   console.log(res.data);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <Users loading={ this.state.loading } users={ this.state.users } />
        </div>
      </div>
    )
  }
}

export default App
