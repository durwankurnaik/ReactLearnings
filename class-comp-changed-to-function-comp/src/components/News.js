import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setArticles] = useState([]);
  let [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  document.title = `${capitalizeFirst(props.category)} -  Florange News`;

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&sortBy=popularity&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);

    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(++page);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&sortBy=popularity&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h2 className="my-4 text-center"><strong>Top headlines - {capitalizeFirst(props.category)}</strong></h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className='container'>
          <div className='row'>
            {articles.map((element) => {
              return <div className='col-md-4 mb-5' key={element.url}>
                <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  category: 'general',
  pageSize: 12
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}

export default News
