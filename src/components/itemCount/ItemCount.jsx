import React from 'react';
import { IconButton, Container, ButtonGroup, Typography, Button, Box } from '@mui/material';
import { Remove, Add } from '@mui/icons-material';
import "./itemCountStyle.scss"

const ItemCount = ({ max, counter, setCounter, handleAgregar }) => {

    const handlerSumar = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    }

    const handlerRestar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <Container>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <IconButton
                    onClick={handlerRestar}
                    disabled={counter === 1}>
                    <Remove />
                </IconButton>
                <Box className='counter'>
                    <Typography>{counter}</Typography>
                </Box>
                <IconButton
                    onClick={handlerSumar}
                    disabled={counter === max}>
                    <Add />
                </IconButton>
                <Button
                    onClick={handleAgregar}
                    variant="contained"
                    disabled={counter === 0}>
                    Añadir
                </Button>
            </ButtonGroup>
        </Container>
    )
}

export default ItemCount