import { useState } from "react";
import CartProvider from "../store/CartProvider";
import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

//Managing states in parent component
function ReactMeals() {
    const [cartIsShown, setCartIsShown] = useState(false);

    //Called when button on header is clicked so we have to send it through props
    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    //Need to send onHideCart to backdrop
    return <CartProvider>
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                {cartIsShown && <Cart onHideCart={hideCartHandler} />}
                <Header onShowCart={showCartHandler} />
                <Meals />
            </div>
            <div className="col-md-2"></div>
        </div>
    </CartProvider>
}

export default ReactMeals;