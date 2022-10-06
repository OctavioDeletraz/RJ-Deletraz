import { Box, Button, Typography, Card, CardMedia } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./checkOutStyle.scss"

export const CheckOutOutOfStock = ({ noneStock }) => {
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
                <Card key={item.id} className="outOfStock">
                    <CardMedia className="imgNoneStock"
                        component="img"
                        image={item.img}
                        alt="img producto"
                    />
                    <Typography variant='body2'>
                        {item.nombre}
                    </Typography>
                </Card>)}
            <hr />
            <Typography variant='body1'>Por favor, regrese al carrito y actualice su compra</Typography>
            <Button variant='contained'><Link className='link' to='/cart'>Volver al carrito</Link></Button>
        </Box>
    )
}