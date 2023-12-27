import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import spinner from "./Spinner";
import Searchbar from './Searchbar';
import InfiniteScroll from "react-infinite-scroll-component";
import FirstE from "./FirstE";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "science",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  articles = [
    {
      source: { id: "espn", name: "ESPN" },
      author: "ESPN",
      title:
        "2023 NCAA volleyball tournament preview: Surprise seed, toughest road, player to watch, picks",
      description:
        "Teams have their eyes on Tampa, Florida, in mid-December as the NCAA volleyball postseason gets underway Thursday.",
      url: "https://www.espn.com/college-sports/story/_/id/38970914/ncaa-volleyball-tournament-2023-bracket-breakdown-preview-nebraska-wisconsin",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1130%2Fr1259784_1296x729_16%2D9.jpg",
      publishedAt: "2023-11-30T15:14:24Z",
      content:
        "Nov 30, 2023, 07:00 AM ET\r\nThere's no denying the Nos. 1 and 2 seeds, especially, are like a who's who of volleyball in this year's NCAA tournament bracket. But that doesn't mean we won't have some u… [+10543 chars]",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-Newsfresh`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const nextPage=this.state.page;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a8a87d93c144866801b32a25896549e&page=${nextPage}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    console.log("cdm");
    this.updateNews();
  }
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a8a87d93c144866801b32a25896549e&page=${nextPage}&pageSize=${this.props.pageSize}`;
  
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
  
     
      this.setState((prevState) => ({
        articles: [...prevState.articles, ...parsedData.articles],
        totalResults: parsedData.totalResults,
        loading: false,
        page: nextPage, 
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    
    }
  };
  
  render() {
   
    return (
  <>
             <Searchbar articles={this.state.articles} />
             
        <h1 className="text-center" style={{marginTop: '20px'}}>
          Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {/* {this.state.loading&& <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles ? this.state.articles.length : 0}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={`${element.url}`}>
                  
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
               
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
       
        </>
    );
  }
}

export default News;
