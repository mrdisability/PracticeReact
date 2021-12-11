import { BsPlus, BsX } from "react-icons/bs"

const CartItem = props => {
    return <li>
        {props.name}: ${props.price} x {props.amount}
        
        <button style={{marginLeft: '10px'}} className="btn btn-outline-primary" 
            onClick={props.onAdd}><BsPlus /></button>
        <button className="btn btn-outline-danger" 
            onClick={props.onRemove}><BsX /></button>
        
    </li>
};

export default CartItem;