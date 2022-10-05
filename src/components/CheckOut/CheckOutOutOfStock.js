import { Box, Button, Typography, Card, CardMedia } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./checkOutStyle.scss"

export const CheckOutOutOfStock = (noneStock) => {
    return (
        <Box>
            <Typography variant='h3'>
                La orden no se pudo procesar
            </Typography>
            <Typography variant='body1'>
                No hay suficiente stock en los siguientes productos:
            </Typography>
            <hr />
            {noneStock.map(item =>
                <Card key={item.id} className="outofstock__item">
                    <CardMedia className="imgCart"
                        component="img"
                        image={item.img}
                        alt="img producto"
                    />
                    <Typography variant='body2'>
                        {item.title}
                    </Typography>
                    <Typography variant='body3'>
                        Cantidad disponible: {item.stock}
                    </Typography>
                </Card>)}
            <hr />
            <Typography variant='body1'>Por favor, regrese al carrito y actualice su compra</Typography>
            <Button variant='contained'><Link to='/cart'>Volver al carrito</Link></Button>
        </Box>
    )
}