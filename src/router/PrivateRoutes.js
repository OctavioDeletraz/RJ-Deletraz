import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Cart } from '../components/Cart/Cart'
import ItemDetailContainer from '../components/itemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../components/itemListContainer/ItemListContainer'
import NavBar from '../components/navbar/NavBar'

export const PrivateRoutes = () => {
    return (
        <>
            {/* ROUTER PRIVADO */}
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/productos/:categoryId' element={<ItemListContainer />} />


                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<Navigate to="/" />} />

                {/* {
                    user.rol === "admin"
                        ? <Route path="/admin" element={<AdminScreen />} />
                        : null
                } */}
            </Routes>
        </>
    )
}
