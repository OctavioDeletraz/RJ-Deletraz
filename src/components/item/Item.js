import React from "react"

const Item = ({ producto }) => {
    return (
        <div>
            <img src={producto.img} />
            <h4>{producto.nombre}</h4>
            <p>{producto.precio}</p>
            <small>Stock disponible: {producto.stock}</small>
            <p>{producto.desc}</p>
            <a className="btn">Ver más</a>
            {/* configurar los estilos mas adelante */}
        </div>
    )
}
export default Item