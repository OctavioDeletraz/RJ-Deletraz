import { createContext } from "react";
import React from "react";
import { useState } from "react";

export const LoginContext = createContext()

const usuarios = [
    {
        email: 'abc@abc.com',
        password: '1234'
    },
    {
        email: 'hola@hola.com',
        password: '1234'
    },
    {
        email: 'octavio@octavio.com',
        password: '1234'
    }
]

export const LoginProvider = ({ children }) => {

    const [user, setUser] = useState({
        user: '',
        logged: false
    })

    return (
        <LoginContext.Provider>
            {children}
        </LoginContext.Provider>
    )
}