import { Button, Card, CardActions, CardContent, Typography, CardMedia, CardActionArea } from "@mui/material"
import React from 'react'
import ItemCount from "../itemListContainer/itemCount/ItemCount"


export const ItemDetail = ({ item }) => {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                image={item.img}
                alt="" />
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="body2" component="div">
                        Stock disponible: {item.stock}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.nombre}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {item.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <ItemCount max={item.stock} />
                <Typography variant="body2" color="text.secondary">
                    {item.precio}
                </Typography>
                <Button variant="contained">Añadir</Button>
            </CardActions>
        </Card >
    )
}