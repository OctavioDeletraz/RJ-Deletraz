import React, { useEffect } from 'react';
import ItemCount from './itemCount/ItemCount';
import { useState } from 'react';

const stock = [
    {
        id: 1,
        nombre: 'Martillo',
        marca: "Santa Juana",
        precio: 1600,
        img: 'https://via.placeholder.com/250',
        stock: 15,
        desc: 'Martillo 300gr'
    },
    {
        id: 2,
        nombre: 'Destornillador phillips n6',
        marca: "Bremen",
        precio: 400,
        img: 'https://via.placeholder.com/250',
        stock: 60,
        desc: 'Destornillador phillips n6'
    },
    {
        id: 3,
        nombre: 'Taladro',
        marca: "Gamma",
        precio: 9000,
        img: 'https://via.placeholder.com/250',
        stock: 3,
        desc: 'Taladro 1200W con regulador de revoluciones'
    },
    {
        id: 4,
        nombre: 'Espatula',
        marca: "Santa Juana",
        precio: 430,
        img: 'https://via.placeholder.com/250',
        stock: 22,
        desc: 'Espatula mango plastico 10cm'
    },
    {
        id: 5,
        nombre: 'Alicate',
        marca: "Bremen",
        precio: 900,
        img: 'https://via.placeholder.com/250',
        stock: 8,
        desc: 'Alicate ideal para cortar cables de hasta 10mm'
    },
    {
        id: 6,
        nombre: 'Pinza emperometrica',
        marca: "Bremen",
        precio: 14000,
        img: 'https://via.placeholder.com/250',
        stock: 2,
        desc: 'Pinza emperometrica con medidor de tension por induccion'
    },
    {
        id: 7,
        nombre: 'Monocomando FV Arizona',
        marca: "FV",
        precio: 12000,
        img: 'https://via.placeholder.com/250',
        stock: 6,
        desc: 'Monocomando para cocina FV Arizona'
    },
    {
        id: 7,
        nombre: 'Tijera de poda',
        marca: "Santa Juana",
        precio: 4500,
        img: 'https://via.placeholder.com/250',
        stock: 4,
        desc: 'Tijera jardinera para podar'
    },
    {
        id: 8,
        nombre: 'Destornillador plano n8',
        marca: "",
        precio: 800,
        img: 'https://via.placeholder.com/250',
        stock: 50,
        desc: 'Destornillador plano n8 punta imantada'
    }
]

const pedirDatos = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(stock)
        }, 3000)
    })
}


const ItemListContainer = ({ titulo }) => {

    const [productos, setProductos] = useState([])

    console.log(productos)


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
            <ItemCount max={8} />
            <ItemCount max={9} />
            <ItemCount max={10} />



        </div>
    )
}

export default ItemListContainer

