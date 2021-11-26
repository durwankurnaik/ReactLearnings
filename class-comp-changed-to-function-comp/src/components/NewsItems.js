import React from 'react'

const NewsItems = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="container">
        <div className="card bg-dark">
          <div>
            <span className="position-absolute badge rounded-pill bg-danger" style={{right: '0'}}>
              <span>{source}</span>
            </span>

          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body bg-dark text-light">
            <h5 className="card-title">{title.slice(0, 45) === title ? title : `${title.slice(0, 45)}...`}</h5>
            <p className="card-text">{description.slice(0, 100) === description ? description : `${description.slice(0, 90)}...`}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {`${new Date(date).getDate()}-${new Date(date).getMonth()}-${new Date(date).getFullYear()}`}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItems
