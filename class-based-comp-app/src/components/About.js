import React, { Component } from 'react'

export class About extends Component {
    render() {
        document.title = "About us - Know about the founders of Florange";
        return (
            <div>
                <h2>This is my about component</h2>
            </div>
        )
    }
}

export default About
