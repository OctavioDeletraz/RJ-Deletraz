import { Button } from '@mui/material'
import React, { useState } from 'react'

export const CheckOut = () => {

    const [nombre, setNombre] = useState()

    const handleSubmit = (e) => {

        e.preventDefault()
        const orden = {

        }
    }

    return (
        <div>
            <h2>CheckOut</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type={'text'} placeholder="Tu nombre" />
                <input type={'email'} placeholder="Email" />
                <input type={'text'} placeholder="Dirección" />

                <Button type="submit">Enviar</Button>
            </form>
        </div>
    )
}
