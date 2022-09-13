import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    return (
        <div>
            <h2>Carrito</h2>
            {/* <hr /> */}

            {
                cart.map((item) => (
                    // Armar un <CartItem key={} item={item}/>
                    <div key={item.id}>
                        <h3>{item.nombre}</h3>
                        <h3>{item.precio}</h3>
                        <h3>Precio: {item.precio}</h3>
                        <h3>Cantidad: {item.cantidad}</h3>
                        <Button onClick={() => removeItem(item.id)}><DeleteIcon /></Button>
                        <hr />
                    </div>
                ))
            }

            <h4>Total: ${cartTotal()}</h4>
            <Button onClick={emptyCart}>Vaciar carrtio</Button>
        </div>
    )
}
