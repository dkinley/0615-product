import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CreateButton = (props) => {
    const [ title, setTitle ] = useState();
    const [ price, setPrice ] = useState();
    const [ description, setDescription ] = useState({});
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
        <button type="submit">Create</button>
    )
}

export default CreateButton;