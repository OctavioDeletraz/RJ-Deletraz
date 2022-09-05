import React, { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ titulo }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((prod) => prod.categoria === categoryId))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                // Puede servir para un Loader por ejemplo, para cerrar el estado de carga al final
                // Independientemente de resultado
                // console.log("Fin del proceso")
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>

            <h1>{titulo}</h1>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={productos} />
            }
        </div>
    )
}

export default ItemListContainer

