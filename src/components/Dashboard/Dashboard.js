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
        
    
//    const displayPosts = posts.map((posts, index) => {
//         return <div key={index}>{posts}</div>
//     })
    render() {
        // return(
        //     <div>
        //         <div>Dashboard
        //             <input name="search" value={post} type="text" placeholder="search"/>
        //             <button>Search</button>
        //             <button>Reset</button>
        //         </div>
        //         {displayPosts}
        //     </div>   
        // )      
        return null    
    }
}
export default Dashboard