import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import { Loader } from '../../Loader/Loader'
import { ItemDetail } from '../itemDetail/ItemDetail'

const ItemDetailContainer = ({ idProducto }) => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))
            })
            .catch(err => console.log(err))
            // setear el estado con un unico producto
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div>
            {
                loading
                    ? <Loader />
                    : <ItemDetail item={item} />
            }
        </div>


    )
}

export default ItemDetailContainer