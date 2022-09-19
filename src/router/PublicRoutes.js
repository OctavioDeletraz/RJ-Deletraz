import React from 'react'
import { LoginScreen } from '../components/LoginScreen/LoginScreen'
import { Navigate, Routes, Route } from 'react-router-dom'

export const PublicRoutes = () => {
    return (
        < Routes >
            <Route path='/login' element={<LoginScreen />} />
            <Route path='*' element={<Navigate to={"/login"} />} />
        </Routes >
    )
}
