import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const ListAll = (props) => {
    const [ allProducts, setAllProducts ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/product") //use the same string that works for a 'get' in postman
            .then((res) => {
                console.log(res.data); //this is just checking that the data came back correctly in the console
                //need state to hold onto the data we just called, do this above with const all Songs
                setAllProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <th>All Products</th>
                </thead>
                <body>
                    {
                        allProducts.map((product, index) => (
                        <tr>
                            <td>
                                <Link to={ `/product/${product._id}`} >{product.title} </Link>
                            </td>
                            <td>
                                <DeleteButton id={ product._id }/>
                            </td>
                    </tr>
                        ))
                    }
                </body>
            </table>
        </div>
    )
};

export default ListAll;