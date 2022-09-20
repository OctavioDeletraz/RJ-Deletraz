import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import "./CartWidget.scss"

const CartWidget = () => {

    const { cartQuantity, cart } = useCartContext()

    return (
        <Link to="/cart" className={`link widget ${cart.length > 0 ? 'widget-visible' : ''}`}>
            <ShoppingCartIcon />
            <span>{cartQuantity()}</span>
        </Link>
    )
}

export default CartWidget