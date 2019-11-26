import React, { component } from 'react';
import './style.css';
import Search from './Search';
import Movielist from './Movielist';
import Rating from './Rating';



let movies = [{
  picture: " https://i.pinimg.com/originals/0e/39/d5/0e39d5956e5370dcd7fca84dcb641a58.jpg ",
  title: "Joker",
  date: "2019",
  rating: "4"
},
{
  picture: "http://fr.web.img3.acsta.net/pictures/19/06/27/20/20/5477805.jpg",
  title: "Regarde Moi",
  date: "2018",
  rating: "5"
},
{
  picture: "https://pixel.nymag.com/imgs/daily/vulture/2019/01/29/books-to-films/artemis-fowl.nocrop.w710.h2147483647.jpg",
  title: "Artemis Fowl",
  date: "2019",
  rating: "3"
},
]
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: movies,
      newRating:1 ,
      keyword: '',


    }
  }
  rateMovie = x => {
    this.setState({ newRating: x })
  }

  searchMovie = y => {
    this.setState({ 
      keyword: y
     })
    
  }
  add = () => {
    let titre = prompt('Enter your titre')
    let image = prompt('Enter your picture')
    let year = prompt('Enter the date')
    let rating = prompt('Enter your rate')

    this.setState({
      list: this.state.list.concat({ title: titre, picture: image, date: year, rating: rating })
    })
  }
  render() {
    const { } = this.state;
    return <div className="App">
<div className="d-flex justify-content-between">
          <Search rummage={titre => this.searchMovie(titre)} />
          <Rating rating={this.state.newRating} rateIt={number => this.rateMovie(number)} />
        </div>
        <Movielist x={this.state.list.filter(el => el.rating >= this.state.newRating && el.title.toUpperCase().includes(this.state.keyword.toUpperCase().trim())) } />
        <button className="btn" onClick={this.add}>+ add movie</button>
      </div>
  }
}

export default App;
