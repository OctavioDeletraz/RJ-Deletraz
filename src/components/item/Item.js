import React from "react"
import ItemCount from "../itemListContainer/itemCount/ItemCount"
import { IconButton, Button, Card, CardActions, CardContent, Typography, Collapse, CardMedia, CardActionArea } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const Item = ({ producto }) => {

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                image={producto.img}
                alt="" />
            {/* Deberia agregar el ALT en datos y cargarlo aca */}
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


            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {producto.desc}
                    </Typography>
                </CardContent>
            </Collapse>
            <CardActions>
                <ItemCount max={producto.stock} />
                <Typography variant="body2" color="text.secondary">
                    {producto.precio}
                </Typography>
                <Button variant="contained">Añadir</Button>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            {/* configurar los estilos mas adelante */}
        </Card >
    )
}
export default Item