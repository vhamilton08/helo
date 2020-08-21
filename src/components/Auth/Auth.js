import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from '../../ducks/reducer'
import './Auth.css'


class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            newUser: false

        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = () => {
        const {username, password} = this.state
        axios.post('/auth/dashboard', {username, password}).then(res => {
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
        }).catch(err => {
            console.log(err)
            alert("Register no work")
        })
    }

    login = () => {
        const {username, password} = this.state
        axios.post('/auth/login', {username, password}).then(res => {
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
        }).catch(err => { console.log(err)
        alert("Login Failed")

    })
    }
    render(){
        const {username, password} = this.state
        return(
            <div>

                <div>Auth</div>
                <input name="username" type="text" value={username} placeholder="username" onChange={e => this.changeHandler(e)}/>
                <input name="password" type="password" value={password} placeholder="password" onChange={e => this.changeHandler(e)}/>
                <button className="authbuttons" onClick={this.login}>Login</button>
                <button  className="authbuttons" onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default connect(null, {updateUser})(Auth)