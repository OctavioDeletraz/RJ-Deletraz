import React from 'react';
import { IconButton, Container, ButtonGroup, Typography, Button } from '@mui/material';
import { Remove, Add } from '@mui/icons-material';

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
                    disabled={counter === 1}
                >
                    <Remove />
                </IconButton>
                <Button
                    variant="disabled">
                    <Typography>{counter}</Typography>
                </Button>
                <IconButton
                    onClick={handlerSumar}
                    disabled={counter === max}>
                    <Add />
                </IconButton>
            </ButtonGroup>
            <Button
                onClick={handleAgregar}
                variant="contained"
                disabled={counter === 0}>
                Añadir
            </Button>
        </Container>
    )
}

export default ItemCount