import { Button, Typography } from "@mui/material"
import React, { useState } from 'react'
import ItemCount from "../itemCount/ItemCount"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { ListaCaracteristicas } from "./ListaCaracteristicas";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const ItemDetail = ({ item }) => {

    const { addToCart, isInCart } = useCartContext()

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

        <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={2}>
                <Grid xs={6} md={8}>
                    <Item>
                        <div>
                            <img className="imageGrid"
                                src={item.img}
                                alt={""}
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <Typography variant="h5" color="text.secondary">
                                Desripción
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.desc}
                            </Typography>
                        </div>
                    </Item>
                </Grid>
                <Grid xs={6} md={4}>
                    <Item>
                        <div className="gridContainer">
                            <Typography gutterBottom variant="h5" component="div">
                                <strong>{item.nombre}</strong>
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div">
                                Cantidad disponible: {item.stock}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Precio: ${item.precio}
                            </Typography>
                            {/* controlar stock 0 que no se pueda comprar */}
                            {
                                isInCart(item.id)
                                    ?
                                    <Button variant="contained"><Link to="/cart" className="link">Terminar mi compra</Link></Button>
                                    :
                                    <ItemCount
                                        max={item.stock}
                                        counter={cantidad}
                                        setCounter={setCantidad}
                                        handleAgregar={handleAgregar}
                                    />
                            }
                        </div>
                        <hr />
                        <div>
                            <Typography gutterBottom variant="h5" component="div">
                                Características del producto
                            </Typography>
                            <Typography gutterBottom variant="body1" component="ul">
                                <ListaCaracteristicas caracteristicas={item.caracteristicas} />
                            </Typography>
                            <Button variant="contained"><Link to={`/productos/${item.categoria}`} className="link">Volver</Link></Button>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}