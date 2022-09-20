import React, { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList';
import { Navigate, useParams } from 'react-router-dom';
import { useLoginContext } from '../../context/LoginContext';
import { Loader } from '../../Loader/Loader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = ({ titulo }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        // 1.- Armar la referencia (Sync)
        const productosRef = collection(db, 'productos')
        const q = categoryId
            ? query(productosRef, where('categoria', '==', categoryId))
            : productosRef
        // 2.- Consumir esa referencia (Async)
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    const { user } = useLoginContext()

    return (
        <>
            {
                user.logged
                    ?
                    <div>

                        <h1>{titulo}</h1>
                        {
                            loading
                                ? <Loader />
                                : <ItemList productos={productos} />
                        }
                    </div>
                    : <Navigate to="/login" />
            }
        </>
    )
}

export default ItemListContainer

