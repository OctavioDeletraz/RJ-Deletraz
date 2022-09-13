import { Typography } from "@mui/material"
import React, { useState } from 'react'
import ItemCount from "../itemListContainer/itemCount/ItemCount"


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { CaracteristicaLista } from "../../helpers/CaracteristicaLista";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const ItemDetail = ({ item }) => {

    const { cart, addToCart, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad
        }
        isInCart(item.id)
        addToCart(itemToCart)
    }



    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={6} md={8}>
                    <Item>
                        <img
                            src={item.img}
                            alt={""}
                            loading="lazy"
                        />
                    </Item>
                </Grid>
                <Grid xs={6} md={4}>
                    <Item>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.nombre}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                            Cantidad disponible: {item.stock}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Precio: ${item.precio}
                        </Typography>


                        {
                            isInCart(item.id)
                                ?
                                <Link to="/cart">
                                    Terminar mi compra
                                </Link>
                                :
                                <ItemCount
                                    max={item.stock}
                                    counter={cantidad}
                                    setCounter={setCantidad}
                                    handleAgregar={handleAgregar}
                                />
                        }
                    </Item>
                </Grid>
                <Grid xs={6} md={8}>
                    <Item>
                        <Typography variant="body2" color="text.secondary">
                            {item.desc}
                        </Typography>
                    </Item>
                </Grid>
                <Grid xs={6} md={4}>
                    <Item>
                        <Typography gutterBottom variant="h5" component="div">
                            <CaracteristicaLista Caracteristicas={item.caracteristicas} />
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}