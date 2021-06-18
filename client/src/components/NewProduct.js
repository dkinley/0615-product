import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewProduct = (props) => {

    const [ title, setTitle ] = useState();
    const [ price, setPrice ] = useState(0.00);
    const [ description, setDescription ] = useState();
    const [ errs, setErrs ] = useState({});

    const submitHandler = (e) => {
        e.preventDefault(); //bring in the event with 'e' and prevent default refresh
        
        axios.post("http://localhost:8000/api/product", {
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
                    console.log(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label> Title </label>
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
                <label> Price </label>
                <input type="number"
                name="price"
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
                <label> Description </label>
                <input type="text"
                name="description"
                value={description}
                onChange={ (e) => setDescription( e.target.value ) }
                />
                {
                    errs.description ?
                        <span className="error-text">{errs.description.message}</span>
                        : null
                }
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
} 

export default NewProduct;