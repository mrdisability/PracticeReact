import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context"

const MealItem = props => {
    const price = `$${props.price.toFixed(2)}`;

    const cartContext = useContext(CartContext);

    //Get amount from meal item form
    const addToCartHandler = amount => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    //Get values through props
    return <li class="list-group-item">
        <div>
            <h3>{props.name}</h3>
            <div>
                {props.description}
            </div>
            <div>
                {price}
            </div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler} />
        </div>
    </li>
};

//name, description, price

export default MealItem;