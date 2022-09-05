import { Button, Card, CardActions, CardContent, Typography, CardMedia, CardActionArea } from "@mui/material"
import React from 'react'
import ItemCount from "../itemListContainer/itemCount/ItemCount"


export const ItemDetail = ({ producto }) => {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                image={producto.img}
                alt="" />

            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="body2" component="div">
                        Stock disponible: {producto.stock}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {producto.nombre}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {producto.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <ItemCount max={producto.stock} />
                <Typography variant="body2" color="text.secondary">
                    {producto.precio}
                </Typography>
                <Button variant="contained">Añadir</Button>
            </CardActions>
        </Card >
    )
}