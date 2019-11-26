import React, { Component } from 'react';
import Rating from './Rating';


class Moviecard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { movie } = this.props;
        return (
            <div className="filmcard">
                    
                <img className="pic" src={movie.picture} />
                <h3 className="titrefilm">{movie.title + ' - ' + movie.date}</h3>
                <Rating rating={movie.rating}/>
            </div>
        )
    }
}

export default Moviecard;
