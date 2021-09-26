import React from 'react'
import Card from './card'

const Cart = ({anime, totalFans, closeBtn}) => {
    return (
        <div className='cart'>
            <h2>Selected anime fans:{anime ? anime[0].members : 0} </h2>
            <h2>Total Fans:{anime ? totalFans : 0} </h2>
            {anime? <Card {...anime[0]} addBtn={null}/> : null}
            <button onClick={closeBtn}>Clear all</button>
        </div>
    )
}

export default Cart
