import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }

    createPost = () => {
      const  {title, img, content} = this.state
        axios.post('/api/createpost/:id', {title, img, content})
        .then(res => {
            this.setState(res.data)
            this.props.history.push('/dashboard')
        }).catch(err => console.log(err))
    }
    changeHandler = (e) => {
        return this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input onChange={this.changeHandler} name="title" value={this.state.title} type="text" placeholder="title"/>
                <input onChange={this.changeHandler} name="img" value={this.state.img} type="text" placeholder="img"/>
                <input onChange={this.changeHandler} name="content" value={this.state.content} type="text" placeholder="content"/>
                <button>Post</button>
                <div>Form</div>
                <p>how is it going</p>
            </div>

        )
    }
}
const mapStateToProps = reduxState =>  {
    return {
        id: reduxState.id
}
}
export default connect(mapStateToProps,)(Form)