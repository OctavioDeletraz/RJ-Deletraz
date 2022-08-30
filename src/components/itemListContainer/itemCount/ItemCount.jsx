import React from 'react';
import { useState } from 'react';
import { IconButton, Container, ButtonGroup, Icon, Typography } from '@mui/material';
import { Remove, Add } from '@mui/icons-material';

const ItemCount = ({ max = 20 }) => {

    let [counter, setCounter] = useState(1)

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
                <IconButton onClick={handlerRestar}><Remove /></IconButton>
                <Typography variant='body2'>{counter}</Typography>
                {/* Me falta centrar el counter */}
                <IconButton onClick={handlerSumar}><Add /></IconButton>
            </ButtonGroup>
        </Container>
    )
}

export default ItemCount