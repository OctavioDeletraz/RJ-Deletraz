import { Button } from '@mui/material'
import React from 'react'

export const CheckOut = () => {
    return (
        <div>
            <h2>CheckOut</h2>
            <hr />
            <form>
                <input type={'text'} placeholder="Tu nombre" />
                <input type={'email'} placeholder="Email" />
                <input type={'text'} placeholder="Dirección" />

                <Button type="submit">Enviar</Button>
            </form>
        </div>
    )
}
