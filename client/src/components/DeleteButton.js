import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const [ productID, setProductID ] = useState(props.id);
    const deleteProduct = (productID) => {
        axios.delete(`http://localhost:8000/api/product/${ productID }`)
            .then((res) => {
                console.log(res.data);
                props.allProducts && props.setAllProducts(props.allProducts.filter((product) => product._id !== productID))
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