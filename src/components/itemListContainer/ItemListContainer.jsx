import React, { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import ItemList from '../itemList/ItemList';

const ItemListContainer = ({ titulo }) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                // Puede servir para un Loader por ejemplo, para cerrar el estado de carga al final
                // Independientemente de resultado
                // console.log("Fin del proceso")
            })
    }, [])

    return (
        <div>

            <h1>{titulo}</h1>
            <ItemList productos={productos} />

        </div>
    )
}

export default ItemListContainer

