import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {loginUser} from '../../ducks/reducer'


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
        axios.post('/api/auth/dashboard', {username, password}).then(res => {
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        }).catch(err => {
            console.log(err)
            alert("Register no work")
        })
    }

    login = () => {
        const {username, password} = this.state
        axios.post('/api/auth/login', {username, password}).then(res => {
            this.props.loginUser(res.data)
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
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default connect(null, {loginUser})(Auth)