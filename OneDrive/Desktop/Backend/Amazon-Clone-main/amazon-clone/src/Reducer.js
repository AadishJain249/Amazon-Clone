export const initialState={
    basket:[{
        id:"4903850",
        title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
        price:16000,
        rating:3,
        image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
    },
    {
        id:"4903850",
        title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
        price:16000,
        rating:3,
        image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
    },
],
user:null
}
export const getAmount=(basket)=>
    basket?.reduce((amount,item)=>item.price+amount,0)

function reduce(state,action)
{
    // console.log(action); // isme action aayenge  ki hamne remove kare hai ya add
    switch(action.type)
    {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item]}
        // break
        case 'REMOVE_FROM_BASKET':
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id)
            console.log(index);
            let newBasket=[...state.basket]
            if(index>=0)
                newBasket.splice(index,1)
            else{
                console.warn(
                   ` (id :${action.id}) is not in basket)`)
            }
            return {...state,
            basket:newBasket}
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        // break
        default:
            return state

    }
}
export default reduce