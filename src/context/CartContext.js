import React, { useContext, useState, createContext, useEffect } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(init)
    const addToCart = (item) => {
        setCart([...cart, item])
    }

    // editar cantidad
    // const increaseQuantityInCart = (id) => {
    //     const newCart = cart.slice()||[...cart]
    //     Buscar el item a modificar segun ID
    //     verificar que la modificacion sea posible (IF)
    // setCart(newCart)
    // }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const emptyCart = () => {
        Swal.fire({
            title: 'Vaciar el carrito',
            text: "¿Esta seguro que desea vaciar el carrito?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Vaciar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
        })
    }
    const terminarCompra = () => {
        Swal.fire({
            title: 'Compra exitosa!',
            icon: 'succes',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Genial!'
        })
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={
            {
                cart,
                addToCart,
                isInCart,
                cartQuantity,
                cartTotal,
                emptyCart,
                removeItem,
                terminarCompra,
            }
        }>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}