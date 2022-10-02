import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import './CheckOutProduct.css'
function CheckOutProduct(props) {
    const [{basket},dispatch]=useStateValue()
    const removeFromBasket=(id)=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:props.id
        })
    }
    return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={props.image} alt=""></img>
        <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{props.title}</p>
                <p className="checkoutProduct__price">
                    <div>₹ {props.price}</div>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(props.rating)
                    .fill()
                    .map((_, i) => (
                        <p className='star'>🌟</p>
                    ))}
                </div>
                <div className='btn_div'>
                <button onClick={removeFromBasket}>Remove From Basket</button>
                </div>
               

        </div>
    </div>
  )
}

export default CheckOutProduct