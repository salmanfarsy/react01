import React from 'react'

const CartCard = ({title, image}) => {
    return (
        <div className='card'>
            <h3>Title : {title}</h3>
            <img src={image} alt={title} />
        </div>
    )
}

export default CartCard
