import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Jacob Lev and Travis Caldwell, CNN",
      "title": "LeBron James ejected after a strike to an opposing player's face leads to an on-court scuffle - CNN",
      "description": "Los Angeles Lakers star LeBron James was ejected during a game against the Detroit Pistons Sunday after making contact with Pistons' Isaiah Stewart in the face.",
      "url": "https://www.cnn.com/2021/11/22/sport/lebron-james-ejected-isaiah-stewart-nba-spt/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211122000704-01-lakers-pistons-incident-super-tease.jpg",
      "publishedAt": "2021-11-22T07:27:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Cbslocal.com"
      },
      "author": "CBS San Francisco",
      "title": "UPDATE: Smash-and-Grab Thieves Target Hayward Mall; Lululemon Store Robbed in San Jose's Santana Row - CBS San Francisco",
      "description": "Looters targeting Bay Area businesses struck again Sunday evening, with smash-and-grab thieves hitting the Southland Mall in Hayward and suspects taking merchandise from a Lululemon store in San Jose.",
      "url": "https://sanfrancisco.cbslocal.com/2021/11/21/smash-grab-thieves-target-hayward-mall-lululemon-store-san-jose-robbed/",
      "urlToImage": "https://sanfrancisco.cbslocal.com/wp-content/uploads/sites/15116056/2021/11/hayward-smash-and-grab-.jpg?w=720",
      "publishedAt": "2021-11-22T06:45:00Z",
      "content": "HAYWARD (CBS SF) Looters targeting Bay Area businesses struck again Sunday evening, with smash-and-grab thieves hitting the Southland Mall in Hayward and suspects taking merchandise from a Lululemon … [+5043 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Japan working on release of oil reserves after U.S. request - sources - Reuters",
      "description": "Japanese officials are working on ways to get around restrictions on releasing national reserves of crude oil in tandem with other major economies to dampen prices, four government sources with knowledge of the plans told Reuters.",
      "url": "https://www.reuters.com/markets/commodities/first-japan-considers-release-oil-reserves-after-us-request-sources-2021-11-22/",
      "urlToImage": "https://www.reuters.com/resizer/Afklqn0rLbUBJtpFMSec8Ol1-5w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/37MO3HJJFZNQXMULPM6ZNZ7FVY.jpg",
      "publishedAt": "2021-11-22T06:33:00Z",
      "content": "TOKYO, Nov 22 (Reuters) - Japanese officials are working on ways to get around restrictions on releasing national reserves of crude oil in tandem with other major economies to dampen prices, four gov… [+3253 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Lauren Thomas",
      "title": "Authentic Brands Group shelves IPO, to sell $12.7 billion stake to private investors - CNBC",
      "description": "Authentic Brands Chief Executive Jamie Salter said the company will target an IPO date in 2023 or 2024.",
      "url": "https://www.cnbc.com/2021/11/22/authentic-brands-shelves-ipo-to-sell-12point7-billion-stake-to-investors.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106666587-1597679929533-gettyimages-103973663-SALTER_AUTHENTIC_BRANDS.jpeg?v=1597679998",
      "publishedAt": "2021-11-22T06:00:01Z",
      "content": "Retail conglomerate Authentic Brands Group plans to shelve a planned initial public offering and instead sell significant equity stakes in its business to private equity firm CVC Capital, hedge fund … [+2655 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Reuters",
      "title": "Oil off 7-week lows but under pressure as release of reserves eyed By Reuters - Investing.com",
      "description": "Oil off 7-week lows but under pressure as release of reserves eyed",
      "url": "https://www.investing.com/news/commodities-news/oil-slumps-on-prospects-of-emergency-supply-releases-europe-covid19-surge-2686321",
      "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPEAA50PT_L.jpg",
      "publishedAt": "2021-11-22T05:45:00Z",
      "content": "By Florence Tan and Naveen Thukral\r\nSINGAPORE (Reuters) - Oil prices came off seven-week lows on Monday but remained under pressure after Japan said it was weighing releasing oil reserves and as the … [+2897 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Los Angeles Times"
      },
      "author": "Christi Carras",
      "title": "'Ghostbusters: Afterlife' exceeds box office expectations - Los Angeles Times",
      "description": "'Ghostbusters: Afterlife' has unseated 'Eternals' atop the domestic box office, while awards-buzzy tennis drama 'King Richard' opened at No. 4.",
      "url": "https://www.latimes.com/entertainment-arts/movies/story/2021-11-21/ghostbusters-afterlife-box-office-eternals-king-richard",
      "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/0b1a145/2147483647/strip/true/crop/3440x1806+8+0/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4c%2F75%2Fd395793a4331beade25b8811aa08%2Ftf0560-comp-v004-1009-graded-srgb-v2.091932_PRINT%20ONLY.jpg",
      "publishedAt": "2021-11-21T23:41:32Z",
      "content": "Moviegoers aint afraid of no ghosts.\r\nSony Pictures Ghostbusters: Afterlife scared up $44 million this weekend, exceeding expectations and unseating Disneys Eternals atop the domestic box office, acc… [+2759 chars]"
    }
  ]
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
