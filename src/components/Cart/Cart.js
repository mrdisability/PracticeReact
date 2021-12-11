import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

//Use cart CartContext to get the items in cart
const Cart = props => {
    //Context is like a database or shared preferences in such a way
    const cartContext = useContext(CartContext);
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

    const hasItems = cartContext.items.length > 0;

    //Add removeItem and addItem handlers to cart
    const onRemoveItemHandler = (id) => {
        cartContext.removeItem(id);
    };

    const onAddItemHandler = (item) => {
        cartContext.addItem(item);
    };

    const cartItems = (<ul style={{maxHeight: '20rem', overflow: 'scroll'}}>{cartContext.items.map((item) => 
        //bind binds function to component for future execution
                <CartItem name={item.name} 
                    amount={item.amount}
                    onRemove={onRemoveItemHandler.bind(null, item.id)}
                    onAdd={onAddItemHandler.bind(null, item)}
                    price={item.price} />
            )}
        </ul>
    );

    return <Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div>
            Total Amount: {totalAmount}
        </div>
        <div style={{marginTop: '10px', float: 'right'}}>
            <button className="btn btn-outline-danger" 
                style={{marginRight: '10px'}} onClick={props.onHideCart}>Close</button>
            {hasItems && <button className="btn btn-outline-primary">Order</button>}
        </div>
    </Modal>
};

export default Cart;