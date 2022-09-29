import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, doc, getDocs, writeBatch } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { stock } from '../../data/data'

export const CheckOut = () => {

    const { cart, cartTotal, terminarCompra } = useCartContext()
    const [values, setValues] = useState({
        nombre: "",
        email: "",
        direccion: "",
    })

    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }


        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')

        // addDoc(ordenesRef, orden)
        //     .then((doc) => {
        //         // terminarCompraSwal(doc.id)
        //         setOrderId(doc.id)
        //         terminarCompra()
        //     })
    }

    // Funcion para agregar los productos de forma hardcodeada

    // const handleAgregarProductos = () => {
    //     const prodRef = collection(db, 'productos')
    //     stock.forEach((prod) => {
    //         const producto = {
    //             id: prod.id,
    //             nombre: prod.nombre,
    //             marca: prod.marca,
    //             precio: prod.precio,
    //             img: prod.img,
    //             stock: prod.stock,
    //             desc: prod.desc,
    //             categoria: prod.categoria,
    //             caracteristicas: prod.caracteristicas
    //         }

    //         addDoc(prodRef, producto)
    //     })
    // }

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
                    type={"text"}
                    value={values.nombre}
                    placeholder="Tu nombre"
                />

                <input
                    name='email'
                    onChange={handleInputChange}
                    type={"email"}
                    value={values.email}
                    placeholder="Email"
                />

                <input
                    name='direccion'
                    onChange={handleInputChange}
                    type={"text"}
                    value={values.direccion}
                    placeholder="Dirección"
                />


                <Button type="submit">Enviar</Button>
                {/* <Button onClick={handleAgregarProductos}>productos</Button> */}
            </form>
        </div>
    )
}