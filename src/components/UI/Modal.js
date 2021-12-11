import { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from './Modal.module.css'

const Backdrop = (props) => {
    //Adding classes from css
    return <div className={classes.backdrop} onClick={props.onHideCart}></div>
};

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
};

//Populate element like root
//So we can use modal from any other component
const portalElement = document.getElementById('overlays')

//Creating portal means creating another element to use instead of root
//Dont have to use portal
//Sent function and data through Parent component to Cart to Modal to Backdrop
//This is how we can hide modal when clicking on backdrop
const Modal = (props) => {
    return <Fragment>
        {createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
};

export default Modal;