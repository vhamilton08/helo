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

    // componentDidMount() {
        
    
  
    render() {
        return(
            <div>
                <div>Dashboard
                    <input name="search" value={this.state.search} type="text" placeholder="search"/>
                    <button>Search</button>
                    <button>Reset</button>
                </div>
                {this.state.posts.map((posts, index) => {
                    return <div key={index}>{posts}</div>
                })}
            </div>   
        )      
       
    }
}
export default Dashboard