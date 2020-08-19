import React, { Component } from 'react'


class Form extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }
    render() {
        return (
            <div>
                <div>Form</div>
                <p>how is it going</p>
            </div>

        )
    }
}

export default Form