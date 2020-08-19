import React, { Component } from 'react'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    componentDidMount() {
        
    }
    render() {
        this.state.posts.map(el, id) => {
            return <div key={id}>{el}</div>
        })
        const {post} = this.state
        return(
            <div>
                <div>Dashboard</div>
                <input name="search" value={post} type="text" placeholder="search"/>
                <button>Search</button>
                <button>Reset</button>
                
            </div>

        )
    }
}

export default Dashboard