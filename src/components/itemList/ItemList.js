import React from "react"
import Item from "../item/Item"

const ItemList = ({ productos = [] }) => {
    return (
        <div>
            {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        </div>
    )
}

export default ItemList