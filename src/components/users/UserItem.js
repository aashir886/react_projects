import React from 'react'
import PropTypes from 'prop-types'

//class component
//class UserItem extends Component {  
const UserItem = ({user: { login, avatar_url, html_url }}) => {
        return (
            <div className="card text-center">
                <img src= { avatar_url } alt="Profile" className="round-img" style = {{ width: '60px' }}/>
                <h3> { login } </h3>
                <a href= { html_url } className="btn btn-dark btn-sm my-1">Profile</a>
            </div>
        )
    }

// create propsTypes
UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}



export default UserItem
