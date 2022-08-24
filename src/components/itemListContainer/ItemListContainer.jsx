import React from 'react';
import ItemCount from './itemCount/ItemCount';

const ItemListContainer = ({ titulo }) => {

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