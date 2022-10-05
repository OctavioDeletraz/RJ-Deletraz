import { useCartContext } from '../../context/CartContext'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import "./CartStyle.scss"
import { CartItem } from './CartItem';
import React from 'react';

export const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    if (cart.length === 0) {
        return (
            < div >
                <h2>Tu carrito está vacío</h2>
                <hr />
                <Button variant='contained'><Link to="/" className='link'>Ir a comprar</Link></Button>
            </div >
        )
    }
    console.log(cart)
    return (
        <div>
            <Typography variant="h3">
                Carrito
            </Typography>
            <Typography variant='h5'>
                Total compra: ${cartTotal()}
            </Typography>
            <hr />
            <div>
                <Button onClick={emptyCart}>Vaciar carrtio</Button>
                <Button variant='contained'><Link to="/checkout" className='link'>Finalizar compra</Link></Button>
            </div>
            {cart.map(itemCart => (
                <CartItem key={itemCart.id} item={itemCart} remove={removeItem} />
            ))}
        </div>
    )
}
