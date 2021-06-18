import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const [ productID, setProductID ] = useState(props.id);
    const deleteProduct = (productID) => {
        axios.delete(`http://localhost:8000/api/product/${ productID }`)
            .then((res) => {
                console.log(res.data);
                // in example we saw setAllSongs(allSongs.filter((songElement) => songElement._id !== songID))
                navigate('/product');
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <button onClick={ () => deleteProduct(props.id) }>Delete</button>
    )
}

export default DeleteButton;