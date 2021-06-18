import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Edit = (props) => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    
    const [ errs, setErrs ] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id) // postman verified url
            .then((res) => {
                console.log(res.data); 
                let product = res.data;
                setTitle(product.title);
                setPrice(product.price);
                setDescription(product.description);
            })
            .catch((err) => {
                console.log(err);
            });
        }, [props.id ]);

    const submitHandler = (e) => {
        e.preventDefault(); //bring in the event with 'e' and prevent default refresh
        axios.put("http://localhost:8000/api/product/" + props.id, {
            title: title,
            price: price,
            description: description,
            }) //axios sends data, use postman url, add .then, .catch
            .then((res) => {
                if(res.data.errors) {
                    console.log(res.data.errors)
                    setErrs(res.data.errors);
                }
                else {
                    console.log(res.data)
                    navigate("/product/" + props.id); //this takes the :id via props so after editing user is now on the details
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Product Edit</h1> 
            <form onSubmit={submitHandler}>
                <div>
                    <label> Title: </label>
                    <input type="text"
                    name="title"
                    value={title}
                    onChange={ (e) => setTitle( e.target.value ) }
                    />
                    {
                        errs.title ?
                            <span className="error-text">{errs.title.message}</span>
                            : null
                    }
                </div>
                <div>
                <label> Price: </label>
                <input type="number"
                name="price"
                min="1"
                value={price}
                onChange={ (e) => setPrice( e.target.value ) }
                />
                {
                    errs.price ?
                    <span className="error-text">{errs.price.message}</span>
                        : null
                }
            </div>
                <div>
                    <label> Decription: </label>
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={ (e) => setDescription( e.target.value ) }
                    />
                    {
                        errs.artist ?
                        <span className="error-text">{errs.description.message}</span>
                            : null
                    }
                </div>
                <div>
                <button type="submit">Update Product</button>
                <button onClick={ () => navigate("/product")}>Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default Edit;