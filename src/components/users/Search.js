import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    // this method is use to dynamically update state whenever the input text field
    onChange = e =>  this.setState({ [e.target.name]: e.target.value })

    // this method is use to submit the form
    onSubmit = e => {
        e.preventDefault();
        if(this.state.text==='') {
            this.props.setAlert('Please enter a username', 'light')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' })
        }
       
    }
    

    render() {
        const { showClear, clearUsers, clearAlert } = this.props;
        return (
            <div>
                <form onSubmit={ this.onSubmit } className="form">
                    <input type="text" name="text" placeholder="Search Users" 
                        value={this.state.text} 
                        onChange={this.onChange}    
                    />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                { showClear && (
                    <button onClick={ clearUsers } className="btn btn-light btn-block">Clear</button>
                )}
                { this.props.showAlert && (
                    <button onClick={clearAlert} className="clearAlert " >X</button>
                )}
            </div>
        )
    }
}

export default Search