import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Cart = () => {

    const { cart } = useContext(CartContext)

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
                    </div>
                ))
            }

        </div>
    )
}
