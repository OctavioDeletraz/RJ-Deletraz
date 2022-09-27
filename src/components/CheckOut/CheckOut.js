import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'

export const CheckOut = () => {

    const { cart, cartTotal, terminarCompra, terminarCompraSwal } = useCartContext()
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.nombre]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }

        // hacer validaciones y agregar return en casos incorrectos

        // enviar la orden a FB

        const ordenesRef = collection(db, 'ordenes')


        cart.forEach((item) => {
            const docRef = doc(db, 'productos', item.id)

            getDoc(docRef)
                .then((doc) => {

                    if (doc.data().stock >= item.cantidad) {
                        updateDoc(docRef, {
                            stock: doc.data().stock - item.cantidad
                        })
                    } else {
                        alert("No hay stock suficiente")
                    }
                })
        })

        // addDoc(ordenesRef, orden)
        //     .then((doc) => {
        //         // terminarCompraSwal(doc.id)
        //         setOrderId(doc.id)
        //         terminarCompra()
        //     })
    }

    if (orderId) {
        return (
            <div>
                <h2>Compra exitosa!</h2>
                <hr />
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <h2>CheckOut</h2>
            <hr />
            <form onSubmit={handleSubmit}>

                <input
                    name='nombre'
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'text'}
                    placeholder="Tu nombre"
                />

                <input
                    name='email'
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'}
                    placeholder="Email"
                />

                <input
                    name='direccion'
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={'text'}
                    placeholder="Dirección"
                />


                <Button type="submit">Enviar</Button>
            </form>
        </div>
    )
}
