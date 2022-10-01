import React from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider/StateProvider'
import { getAmount } from '../Reducer'
function SubTotal() {
    const [{basket}]=useStateValue()
    console.log(basket);
  return (
   <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getAmount(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />
        <button>Proceed to checkout</button>
    </div>
  )
}
export default SubTotal
