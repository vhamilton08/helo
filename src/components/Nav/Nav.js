import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
// import {updateUser} from '../../ducks/reducer'



class Nav extends Component {
    constructor(props){
        super(props)
    }
    logout = () => {
        axios.post('/api/auth/logout').then(res => {
            this.props.logoutUser()
        }).catch(err => console.log(err))
    }
    render(){

        return(
           
            <div>
          <div>
            Nav
         </div>
         <nav>
            <ul>
                <li><Link to="/dashboard">Home</Link></li>
                <li><Link to="/new">New Post</Link></li>
                <li onClick={this.logout}><Link to="/">Logout</Link></li>
            </ul>
            <img src={this.props.profile_pic} alt="profile-pic"/>
            {this.props.username}
           
         </nav>
        </div>

)
}
    }

const mapStateToProps = (reduxState) => {
    return { 
     profile_pic: reduxState.profile_pic,
     username: reduxState.username
    }
}
export default connect(mapStateToProps)(Nav)