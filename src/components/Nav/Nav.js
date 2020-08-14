import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'


class Nav extends Component {
    // componentDidMount(){
    //     this.props.
    // }
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
         </nav>
        </div>

)
}
    }

const mapStateToProps = state => state
export default connect(mapStateToProps)(Nav)