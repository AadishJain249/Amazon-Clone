/* eslint-disable array-callback-return */
import axios from 'axios'
import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Payment.css';
import { useStateValue } from "../StateProvider/StateProvider";
import CheckOutProduct from '../CheckoutProduct/CheckOutProduct';
import { Link } from 'react-router-dom';
import {CardElement,useElements,useStripe} from '@stripe/react-stripe-js'
import { getAmount } from '../Reducer';
function Payment() {
    const history=useHistory()
    const[{basket,user},dispatch]=useStateValue()
    const stripe=useStripe()
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret,setclientsecret]=useState("")
    const elements=useElements()   
    const [error,seterror]=useState(null)
    const [disable,setdisable]=useState(true)
    //
    useEffect(()=>{
        const getClientSecret=async()=>{
            const response=await axios({
                method:'post',
                url:`/payments/create?total=${getAmount(basket)*100}`
            })
            console.log(response.data.clientSecret);
            // will set clientsecret each time when the basket item change
            setclientsecret(response.data.clientSecret)

        }
        getClientSecret()
    },[basket])
    console.log(clientSecret)
    const handlesubmit=async(event)=>{
        event.preventDefault()
        setProcessing(true)
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Aadish'
                }
            }
        }).then(()=>{
           
        })
        setProcessing(false) // after payment to stop it from processing payment successfull
        seterror(null)
        setSucceeded(true) // completed
        history.replace('/')
    }
    const handlechange
    =(event)=>{
        setdisable(event.empty)
        seterror(event.error?event.error.message:"")
    }
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout(<Link to="/checkout">{basket.length}items</Link>)
                 </h1>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>Sector 3 Rohini</p>
                        <p>Delhi</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                    {basket.map((item) => (
                    <CheckOutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                    ))}
                     </div>
                </div>
            

                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handlesubmit}>
                        <CardElement onChange={handlechange}></CardElement>
                        <div className='payment__priceContainer'>
                        <p>Order Value ({basket.length} items):{" "}
                           <strong>{`₹ ${getAmount(basket)}`}</strong>
                        </p>
                        {/* button is disabled after one performing one of these actions */}
                        <button disabled={processing || disable || succeeded}>
                            <span >{processing?<p>Processing</p>:"Buy Now"}</span>
                        </button>
                        </div>
                        {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
