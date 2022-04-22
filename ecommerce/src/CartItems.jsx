import React, {useContext} from 'react'
import Item from './item'
import Shopping from './Shopping'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import CartContext from './CartContext'

const CartItems = () => {
    const { cart, addtoCart } = useContext(CartContext)
    
    if (cart > 0) {
        return (
            <div className="cart">
                
            </div>
        )
    }
    else {
        return (
            <div className="cart">
                <h3>you havent added anything.</h3>
            </div>
        )
    }
}


export default CartItems;
