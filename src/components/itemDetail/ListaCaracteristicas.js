import React from 'react'
import './styleItemDetail.scss'

export const ListaCaracteristicas = ({ caracteristicas }) => {

    const listCaracteristicas = caracteristicas.map((elem) => <li>{elem}</li>)

    return (
        <ul className='liCaracteristicas'>{listCaracteristicas}</ul>
    )
}
