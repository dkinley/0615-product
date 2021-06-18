import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const Details = (props) => {
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id) // postman verified url
            .then((res) => {
                console.log(res.data); //.then gives response object which is commonly referred to as res
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }, [props.id ]);

    return (
        <div>
            <h1>Product Details</h1>
            <table>

                <tr>
                <td>
                    Title:
                </td>
                <td>
                    { product.title }
                </td>
                </tr>
                <tr>
                <td>
                    Price:
                </td>
                <td>
                    { product.price }
                </td>
                </tr>
                <tr>
                <td>
                    Description:
                </td>
                <td>
                    { product.description }
                </td>
                </tr>
                
            </table>
            <button onClick={ () => navigate(`/product/${props.id}/edit`)}>Edit</button>
            <button onClick={ () => navigate("/product")}>Back</button>
            <DeleteButton id={ product._id }/>
        </div>
    )
};

export default Details;