import React , {Component} from 'react'
import './Rating.css'


const Rating = props => {
    
    let arrStars = []
    for(let i =0 ; i<5; i++){
        if(props.rating > i){ 
            arrStars.push(<i onClick={() => props.rateIt( i +1)} class="fas fa-star"></i>)
            } else {
                arrStars.push(<i onClick={() => props.rateIt(i +1)} class="far fa-star"></i>)
 
            }
        }
        return ( <div className="favori">
            <p>Minimum Rating</p>
             {arrStars}
            </div>)
    }

export default Rating;