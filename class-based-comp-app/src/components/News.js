import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    render() {
        document.title = "Florange - Get your daily dose of news for free";
        return (
            <div>
                <h2>This is my main news component</h2>
                <NewsItems/>
            </div>
        )
    }
}

export default News
