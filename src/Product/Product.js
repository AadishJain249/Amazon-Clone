import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider/StateProvider";
function Product(props) {
  const theme = window.localStorage.getItem("theme-azclone")
    ? window.localStorage.getItem("theme-azclone")
    : "light";
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.images[0],
        price: props.price,
        rating: props.rating,
      },
    });
  };
  const buttonStyle = {
    backgroundColor:
      props.avgRating == "--"
        ? "#fff"
        : parseFloat(props.avgRating) < 4.0
        ? "#db7c38"
        : "#48c479",
    color: isNaN(props.avgRating) ? "#535665" : "#fff",
  };

  return (
    // <div className={theme === "light" ? "card" : "product__dark product"}>
    //   <div className="card-body">
    //     <h6 className="card-title">{props.title}</h6>
    //     <div className="card-details">
    //       <div>{props.price}</div>
    //       {/* <div className="product__rating"> */}
    //         {Array(Math.floor(props.rating))
    //           .fill()
    //           .map((_, i) => (
    //             <p key={i}>🌟</p>
    //           ))}
    //       {/* </div> */}
    //     </div>
    //     <button onClick={addToBasket}>Add to Basket</button>
    //     <img className="card-img " src={props.images[0]} alt="" />
    //   </div>
      

    // </div>
    <div className="card">
    <img className="card-img" src={props.images[0]} alt="Not Rendring" />
    <div className="card-body">
      <h6 className="card-title">{props.title}</h6>
      <div className="card-details">
        <div className="rating">
          <span>{props.rating}⭐</span>
        </div>
        <div className="price"><b>₹{props.price}</b></div>
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  </div>
  );
}
export default Product;
