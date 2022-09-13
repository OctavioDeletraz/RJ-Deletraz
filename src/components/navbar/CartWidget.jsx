import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import "./NavBar.css"

const CartWidget = () => {

    const { cartQuantity } = useCartContext()

    return (
        <Link to="/cart" className={"link"}>
            <ShoppingCartIcon />
            <span>{cartQuantity()}</span>
        </Link>
    )
}

export default CartWidget