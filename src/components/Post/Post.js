import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            img: '',
            content: '',
            username: '',
            profile_pic: ''
        }
    }

    getPosts = () => {
        const {match: {params}} = this.props
        axios.get('/api/posts/:id', {params})
        .then(res => {
            this.setState(res.data)
        }) .catch(err => console.log(err))
    }
    render(){
        return (
            <div>
                Post
                <h3>{this.state.title}</h3>
                <img src={this.state.img}/>
                <p>{this.state.content}</p>
                <h3>{this.state.username}</h3>
                <img src={this.state.profile_pic}/>
                <button onClick={this.props.deletePost}>Delete Post</button>
            
            </div>

        )
    }
}
const mapStateToProps = reduxState => {
   return {
        id: reduxState.id
}
}
export default connect(mapStateToProps)(Post)