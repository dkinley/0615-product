import React, { useEffect, useState } from 'react';

const NewProduct = (props) => {

    const [ title, setTitle ] = useState();
    const [ price, setPrice ] = useState(0.00);
    const [ description, setDescription ] = useState();

    return (
        <div>
            <h2>Product Manager</h2>
            <form>
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

            </form>
        </div>
    )
} 

export default NewProduct;