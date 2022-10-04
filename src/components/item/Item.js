import { Card, CardActions, CardContent, Typography, CardMedia, Button, Box } from "@mui/material"
import { Link } from "react-router-dom"
import "./ItemStyle.scss"

const Item = ({ producto }) => {

    return (
        <Card className="Card">
            <CardMedia
                component="img"
                image={producto.img}
                alt=""
                className="image" />
            {/* Deberia agregar el ALT en datos y cargarlo aca */}
            <CardContent className="cardContent">
                <Typography variant="h5" component="div">
                    {producto.nombre}
                </Typography>
            </CardContent>
            <CardActions className="cardButtonContainer">
                <Box >
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
                </Box>
            </CardActions>
            {/* configurar los estilos mas adelante */}
        </Card >
    )
}
export default Item