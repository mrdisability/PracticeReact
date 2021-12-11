import { Fragment, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg"
import { BsCart } from "react-icons/bs"
import CartContext from "../../store/cart-context"
import classes from './Header.module.css';

//Use our newly created context

//A common pattern in React is for a component to return multiple elements. 
//Fragments let you group a list of children without adding extra nodes to the DOM
const Header = (props) => {
    const cartContext = useContext(CartContext);

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const { items } = cartContext;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.myButton} ${btnIsHighlighted ? classes.bump : ''}`;

    //The Effect Hook lets you perform side effects in function components:
    //useEffect is for handling side effects
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
            //console.log("Remove animation")
        }, 300);

        //Clean up side effects you use in useEffect()
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    //Transform array to a single value or number
    //Returns number of items
    // const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
    //     //Stores amount per item type
    //     return currentNumber + item.amount;

    //     //0 is the initial value
    // }, 0);

    //Component will be reevaluated by react when context changes
    return <Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary" style={{marginTop: '20px'}}>
        <div class="container-fluid">
            <Link className='navbar-brand' to="/react_meals">ReactMeals</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link className='nav-link' to="/react_meals">Home</Link>
                </li>
            </ul>

            {/* If this was a button component I would have to send function through props as well */}
             <button className={btnClasses} onClick={props.onShowCart}>
                    <BsCart className={classes.icon} /> Cart <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
            </div>
        </div>
        </nav>

        <div>
            <img style={{width: '100%', height: '200px', objectFit: 'cover'}} src={backgroundImage} alt="Plates of meals" />
        </div>
    </Fragment>
};

export default Header;

/* <header>
<h1>ReactMeals</h1>
<button>Cart</button>
</header> */

/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> */