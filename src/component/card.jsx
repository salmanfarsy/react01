import React from 'react'

const Card = ({title, image, rating, members, released, episodes}) => {
    return (
        <div className='card'>
            <h2>Title: {title}</h2>
            <img src={image} alt={title} />
            <h3>Rating: {rating} / 10 </h3>
            <p>Fan Members :{members} </p>
            <p>Released Year: {released}</p>
            <p>Episodes: {episodes}</p>
        </div>
    )
}

export default Card
