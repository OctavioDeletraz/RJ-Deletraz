import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../../Loader/Loader'
import { ItemDetail } from '../itemDetail/ItemDetail'
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../firebase/config'

const ItemDetailContainer = ({ idProducto }) => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)
        // 1.- Armar la referencia (Sync)
        const docRef = doc(db, 'productos', itemId)
        // 2.- Llamar a la DB (Async)
        getDoc(docRef)
            .then((doc) => {
                setItem({ id: doc.id, ...doc.data() })
            })
            .finally((() => {
                setLoading(false)
            }))
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