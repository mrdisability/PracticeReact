//Creating context to store data we want to use everywhere such as cart amount etc
import { createContext } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;