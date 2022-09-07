import React from "react"
import Item from "../item/Item"
import "./ItemList.css"

const ItemList = ({ productos = [] }) => {
    return (
        <div className="div-flex">
            {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        </div>
    )
}

export default ItemList