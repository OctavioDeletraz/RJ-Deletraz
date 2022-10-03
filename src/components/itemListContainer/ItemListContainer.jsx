import ItemList from '../itemList/ItemList';
import { Navigate } from 'react-router-dom';
import { useLoginContext } from '../../context/LoginContext';
import { Loader } from '../../Loader/Loader';
import { useProductos } from '../../hooks/useProductos';

const ItemListContainer = ({ titulo }) => {

    const { productos, loading } = useProductos()

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

