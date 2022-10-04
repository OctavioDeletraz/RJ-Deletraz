import "./CartStyle.scss"
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import { Button } from "@mui/material";

export const CartItem = ({ item, remove }) => {
    return (
        <div className="cartItem" key={item.id}>
            <div className="cartItemInfo">
                <img src={item.img} alt={""} />
                <div>
                    <p className="cartItemTitle">{item.nombre}</p>
                    <p className="cartItemQuantity">Cantidad: {item.cantidad}</p>
                </div>
            </div>
            <p className="cartItemPrice">Precio: ${(item.precio * item.cantidad).toFixed(2)}</p>
            <Button onClick={() => remove(item.id)}><DeleteIcon /></Button>
        </div>
    )
}
