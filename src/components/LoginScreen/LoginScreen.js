import { Grid, Avatar, TextField, Button } from '@mui/material'
import { LockOutlined } from '@mui/icons-material';
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { useForm } from '../../hooks/useForm'
import './LoginStyle.scss'

export const LoginScreen = () => {

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    const { login, user } = useContext(LoginContext)

    const { values, handleInputChange } = useForm({
        email: '',
        pass: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }

    return (
        <Grid>
            <form elevation={10} style={paperStyle} onSubmit={handleSubmit}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlined /></Avatar>
                    <h2>Iniciar sesión</h2>
                </Grid>

                <TextField
                    name='email'
                    type={'email'}
                    className='inputLogin'
                    value={values.email}
                    onChange={handleInputChange}
                    label='Usuario'
                    placeholder='Ingresar usuario'
                    variant="outlined"
                    fullWidth required />
                <TextField
                    name='pass'
                    type={'password'}
                    className='inputLogin'
                    value={values.pass}
                    onChange={handleInputChange}
                    label='Contraseña'
                    placeholder='Ingresar contraseña'
                    variant="outlined"
                    fullWidth required />
                <Button
                    type='submit'
                    color='primary'
                    variant="contained"
                    style={btnstyle}
                    fullWidth>
                    Ingresar</Button>
                {user.error && <small>{user.error}</small>}
            </form>
        </Grid>
    )
}