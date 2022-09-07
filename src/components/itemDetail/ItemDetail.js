import { Button, Typography } from "@mui/material"
import React from 'react'
import ItemCount from "../itemListContainer/itemCount/ItemCount"


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { CaracteristicaLista } from "../../helpers/CaracteristicaLista";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const ItemDetail = ({ item }) => {
    return (
        // <Card sx={{ maxWidth: 250 }}>
        //     <CardMedia
        //         component="img"
        //         image={item.img}
        //         alt="" />
        //     <CardActionArea>
        //         <CardContent>
        //             <Typography gutterBottom variant="body2" component="div">
        //                 Stock disponible: {item.stock}
        //             </Typography>
        //             <Typography gutterBottom variant="h5" component="div">
        //                 {item.nombre}
        //             </Typography>
        //         </CardContent>
        //     </CardActionArea>
        //     <CardContent>
        //         <Typography variant="body2" color="text.secondary">
        //             {item.desc}
        //         </Typography>
        //     </CardContent>
        //     <CardActions>
        //         <ItemCount max={item.stock} />
        //         <Typography variant="body2" color="text.secondary">
        //             {item.precio}
        //         </Typography>
        //         <Button variant="contained">Añadir</Button>
        //     </CardActions>
        // </Card >

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={6} md={8}>
                    <Item>
                        <img
                            src={item.img}
                            alt={""}
                            loading="lazy"
                        />
                    </Item>
                </Grid>
                <Grid xs={6} md={4}>
                    <Item>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.nombre}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                            Cantidad disponible: {item.stock}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Precio: ${item.precio}
                        </Typography>
                        <ItemCount max={item.stock} />
                        <Button variant="contained">Añadir</Button>
                    </Item>
                </Grid>
                <Grid xs={6} md={8}>
                    <Item>
                        <Typography variant="body2" color="text.secondary">
                            {item.desc}
                        </Typography>
                    </Item>
                </Grid>
                <Grid xs={6} md={4}>
                    <Item>
                        <Typography gutterBottom variant="h5" component="div">
                            <CaracteristicaLista Caracteristicas={item.caracteristicas} />
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}