import React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon } from '@iconify/react';
import CartWidget from '../CartWidget/CartWidget';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import "./NavBar.scss"
import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useLoginContext } from '../../context/LoginContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { AccountCircle } from '@mui/icons-material';
import { useCartContext } from '../../context/CartContext';

function UseAppBarLabel(label) {

    const { cart } = useCartContext()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { logout } = useLoginContext()

    return (
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to={'/productos/jardin'} className={"link"}>Jardin</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to={'/productos/griferias'} className={"link"}>Griferias</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to={'/productos/herramientas'} className={"link"}>Herramientas</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to={'/productos/maquinas'} className={"link"}>Maquinas</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to={'/productos/electricidad'} className={"link"}>Electricidad</Link >
                    </MenuItem>
                </Menu>

            </IconButton>
            <Icon icon="emojione:hammer" width="25" height="25" />
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                {label}
                <Link to={'/'} className={"link"}><Button>Productos</Button></Link>
            </Typography>
            {cart.length > 0
                ?
                <IconButton>
                    <CartWidget />
                </IconButton>
                :
                <></>
            }
            <IconButton>
                <AccountCircle />
            </IconButton>
            <IconButton>
                <LogoutIcon onClick={logout} />
            </IconButton>
        </Toolbar >
    );
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
            // main: '#1976d2',
        },
    },
});

export default function EnableColorOnDarkAppBar() {
    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color="primary">
                    {UseAppBarLabel('Bonneville')}
                </AppBar>
            </ThemeProvider>
        </Stack>
    );
}
