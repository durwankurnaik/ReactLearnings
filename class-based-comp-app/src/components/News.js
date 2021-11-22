import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  constructor() {
    super();
    console.log("This is a constructor");
    this.state = {
      articles: [],
      loading: true
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1ce45add0b8743919ba3f86a5b9db555";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles});
  }

  render() {
    document.title = "Florange - Get your daily dose of news for free";
    return (
      <div className="container">
        <h2 className="my-4 text-center"><strong>Florange - Top headlines</strong></h2>
        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-3 mb-5' key={element.url}>
                <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default News
