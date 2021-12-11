import CartContext from "./cart-context";
import { useReducer } from "react";

//useState or useReducer to reevaluate components
const defaultCartState = {
    items: [],
    totalAmount: 0
};

//useReducer manages state by itself
//Add item to forward to reducer
const cartReducer = (state, action) => {
    //Group items together

    if (action.type === 'ADD') {
        const updatedTotalAmount =
          state.totalAmount + action.item.price * action.item.amount;

          //console.log(action.item)
    
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        //action.item.amount
    
        if (existingCartItem) {
            //If item of type exists, change amount of item
          const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount,
          };

          updatedItems = [...state.items];

          //If item exist then overwrite with item with new amount and add to totalAmount
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            //If item type doesnt exist then add item
          updatedItems = state.items.concat(action.item);
        }
    
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        // let updatedTotalAmount;
        // if (state.totalAmount > 0) {
        //     updatedTotalAmount = state.totalAmount - existingItem.price;
        // }

        let updatedItems;
        if (existingItem.amount === 1) {
            //Last item of that type
            //Then remove item from array
          updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            //If more than one item then just update amount
            //Keep item and change amount
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
    
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
        };
    }

    return defaultCartState;
};

const CartProvider = props => {
    //useReducer returns two elements in an array
    //Constant and function
    //useState and useReducer are the same
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    //Creating actions that would be used in cartReducer
    //Get item and forward to reducer
    const addItemToCartHandler = (item) => {
        console.log(item);
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    //Add and remove item functions and cart context
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    //{props.children} so we can use CartProvider as a root or parent element
    //Can now be used to wrap all components that need access to the cart
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;