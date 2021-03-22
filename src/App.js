import React, { Component } from 'react'
import Navbar from './components/Layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/Layout/Alert'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    users: [],
    alert: null,
    loading: false
  }

  // this function is called from the search component by passing props
  searchUsers = async (text) => {
    this.setState( { loading: true } );
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState( { loading: false, users: res.data.items  } );
  }

  // this func is called from the search component to the clear users
  clearUsers = () => this.setState({ users: [], loading: false })

  // this func is called from the serch component to raise an alert for empty text field
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } })
    // remove the alert msg after 5s
    setTimeout(() => this.setState({ alert: null }), 5000)
  }

  clearAlert = () => {
    this.setState({ alert: null })
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
       <Navbar  />
       <div className="container" >
       <Alert alert={ this.state.alert } />
       <Search searchUsers={ this.searchUsers } 
               clearUsers={ this.clearUsers } 
               showClear={ users.length > 0 ? true : false }
               setAlert={  this.setAlert}
               showAlert={ this.state.alert !== null ? true : false  }
               clearAlert={ this.clearAlert  }   
        />
       <Users loading={ loading } users={ users } />
       </div>
      </div>
    );
  }
}

export default App
