import formatCurrency from "./utils/formatCurrency";

export const initialState = {
  basket: [
    // basket length is 2
  ],
  user: null,
};
export const getAmount = (basket) =>
  
  formatCurrency(
    basket?.reduce(
      (amount, item) => Number(item.price) + amount,
      0
    )
  );

function reduce(state, action) {
  // isme jo ham add kar rhe hai items
  // console.log(action.item);

  // isme saare pushed items
  // console.log(...state.basket);

  // console.log(action); // isme action aayenge  ki hamne remove kare hai ya add
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, // state teri initial state hai isme items add hote rhenge
        basket: [...state.basket, action.item],
      };
    // break
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // console.log(index);
      let newBasket = [...state.basket];
      if (index >= 0) newBasket.splice(index, 1);
      else {
        // console.warn(` (id :${action.id}) is not in basket)`);
      }
      return { ...state, basket: newBasket };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    // break
    default:
      return state;
  }
}
export default reduce;
