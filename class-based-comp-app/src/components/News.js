import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    document.title = "Florange - Get your daily dose of news for free";
    return (
      <div className="container">
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Florange News</h1>
              <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
              <p>
                <a href="/" className="btn btn-primary mx-2 my-2">Main call to action</a>
                <a href="/" className="btn btn-secondary my-2">Secondary action</a>
              </p>
            </div>
          </div>
        </section>
        <NewsItems title="My custom title" description="Here comes the description" publishedAt="Published on some some date" />
      </div>
    )
  }
}

export default News
