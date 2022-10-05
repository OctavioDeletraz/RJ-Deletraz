import { Button, Typography } from '@mui/material'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useForm } from '../../hooks/useForm'
import "./checkOutStyle.scss"
// import { stock } from '../../data/data'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CheckOutOutOfStock } from './CheckOutOutOfStock'


export const CheckOut = () => {

    const { cart, cartTotal, terminarCompra } = useCartContext()
    const { values, handleInputChange } = useForm({
        nombre: "",
        email: "",
        direccion: "",
    })

    const [orderId, setOrderId] = useState(null)



    const handleSubmit = async (e) => {
        e.preventDefault()
        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }

        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.nombre.length < 4) {
            alert("Email incorrecto")
        }


        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')
        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const productos = await getDocs(q)
        const outOfStock = []

        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            // terminarCompraSwal(doc.id)
                            setOrderId(doc.id)
                            terminarCompra()
                        })
                })
        } else {
            <CheckOutOutOfStock noneStock={outOfStock} />
            console.log(outOfStock)
        }
    }

    // Funcion para agregar los productos de forma hardcodeada

    // const handleAgregarProductos = () => {
    //     const prodRef = collection(db, 'productos')
    //     stock.forEach((prod) => {
    //         const producto = {
    //             // id: prod.id,
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
                <Typography variant='h3'>
                    Compra exitosa!
                </Typography>
                <hr />
                <Typography variant='paragraph'>
                    Tu número de orden es: <strong>{orderId}</strong>
                </Typography>
                <Box>
                    <Button variant="contained"><Link to="/productos" className="link">Volver</Link></Button>
                </Box>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <Box className='checkOut'
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <Typography variant='h3' className='checkOutTitle'>
                Tus datos
            </Typography>
            <TextField
                className='inputCheckOut'
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                name='nombre'
                onChange={handleInputChange}
                type={"text"}
                value={values.nombre}
            />
            <TextField
                className='inputCheckOut'
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name='email'
                onChange={handleInputChange}
                type={"email"}
                value={values.email}
            />
            <TextField
                className='inputCheckOut'
                id="outlined-basic"
                label="Dirección"
                variant="outlined"
                name='direccion'
                onChange={handleInputChange}
                type={"text"}
                value={values.direccion}
            />
            <Button variant='contained' type="submit">Enviar</Button>
            {/* <Button onClick={handleAgregarProductos}>productos</Button> */}
        </Box>

    )
}