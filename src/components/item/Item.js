import React from "react"
import { Card, CardActions, CardContent, Typography, CardMedia, CardActionArea, Button } from "@mui/material"
import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ producto }) => {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                image={producto.img}
                alt="" />
            {/* Deberia agregar el ALT en datos y cargarlo aca */}
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {producto.nombre}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link
                    to={`/item/${producto.id}`}
                    variant="contained"
                    className={"link"}>
                    <Button variant="contained">Ver más</Button>
                </Link>

            </CardActions>
            {/* configurar los estilos mas adelante */}
        </Card >
    )
}
export default Item