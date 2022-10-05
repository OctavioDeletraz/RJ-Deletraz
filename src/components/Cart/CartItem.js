import "./CartStyle.scss"
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import { Button } from "@mui/material";


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export const CartItem = ({ item, remove }) => {
    return (

        <Card className="itemCart" key={item.id}>
            <CardMedia className="imgCart"
                component="img"
                image={item.img}
                alt="img producto"
            />
            <Box className="containerCartDescription">
                <CardContent>
                    <Typography component="div" variant="h5">
                        {item.nombre}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Cantidad: {item.cantidad}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Precio: ${item.precio * item.cantidad}
                        <Button className="buttonDelete" onClick={() => remove(item.id)}><DeleteIcon /></Button>
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}