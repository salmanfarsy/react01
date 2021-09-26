import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Card = ({title, image, rating, members, released, episodes, addBtn}) => {
    return (
        <div className='card'>
            <h2>Title: {title}</h2>
            <img src={image} alt={title} />
            <h3>Rating: {rating} / 10 </h3>
            <p>Fan Members :{members} </p>
            <p>Released Year: {released}</p>
            <p>Episodes: {episodes}</p>
         
            {addBtn?  <button onClick={addBtn.bind(this, title)}    icon="coffee" > 
              <FontAwesomeIcon icon="shopping-cart" />   
               Add to Cart</button> 
              : 
              null}
        
        </div>
    )
}

export default Card
