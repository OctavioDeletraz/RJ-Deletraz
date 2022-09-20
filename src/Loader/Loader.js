import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Loader.scss'


export const Loader = () => {
    return (
        <Box sx={{ display: 'flex' }} className="Loader">
            <CircularProgress />
        </Box>
    )
}