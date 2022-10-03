import React, { useState } from "react"
import { Card, CardActions, CardContent, Typography, CardMedia, CardActionArea, Button } from "@mui/material"
import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ producto }) => {

    return (
        <Card className="Card">
            <CardMedia
                component="img"
                image={producto.img}
                alt=""
                className="image" />
            {/* Deberia agregar el ALT en datos y cargarlo aca */}
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {producto.nombre}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {producto.stock > 0
                    ?
                    <Link
                        to={`/item/${producto.id}`}
                        variant="contained"
                        className={"link"}>
                        <Button variant="contained">ver más</Button>
                    </Link>
                    :
                    <Button variant="disabled">Sin stock</Button>
                }
            </CardActions>
            {/* configurar los estilos mas adelante */}
        </Card >
    )
}
export default Item