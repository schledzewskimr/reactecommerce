import React from 'react';
import NavBar from './NavBar'
import CartItems from './CartItems'
import './index.css'

function Cart(){
    return(
        <React.Fragment>
            <NavBar />
            <CartItems />
        </React.Fragment>
    )
}

export default Cart