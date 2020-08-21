import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }
changeHandler = (e) => {
    return this.setState({
        [e.target.name]: e.target.value
    })
  
}
     componentDidMount() {
         axios.get('/auth/posts',)
        .then(res => {

        })
     }
  
    render() {
        // console.log(this.state.posts)
        return(
            <div>
                <div>Dashboard
                    <input onChange={e => this.changeHandler(e)} name="search" value={this.state.search} type="text" placeholder="search"/>
                    <button>Search</button>
                    <button>Reset</button>
                </div>
                {this.state.posts.map((posts, index) => {
                    console.log(posts)
                    return <div key={index}>{posts}</div>
                })}
                <input
                id="checkbox1" type="checkbox" value={this.state.userposts} onChange={e => this.changeHandler(e)}/>
                <label for="checkbox1">My Posts</label>
            </div>   
        )      
       
    }
}
const mapStateToProps = reduxState => {
    return {
        id: reduxState.id
    }
}
export default connect(mapStateToProps)(Dashboard)