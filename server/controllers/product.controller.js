const Product = require('../models/product.model')

module.exports = {

    getAll: (req, res) => {  // the getAll is the key, the value is the entire anonymous object
        Product.find({}) //this is going to use the model connection to the db
                        // 'find' returns an array by default 
            .then((allProducts) => {
                console.log(allProducts);
                res.json(all); // this is the return from the route
            })
            .catch((err) => {
                console.log("error was found in the getAll");
                console.log(err);
                res.json(err);
            });
    },

    create: (req, res) => {  
        console.log(req.body); //whenever creating, it's good to console log
        Product.create(req.body) // no {} as it is already an object, the req (request) is already an object
            .then((newProduct) => {  //this is new 
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch((err) => {
                console.log("error was found in the Create");
                console.log(err);
                res.json(err);
            });
    },

    getOne: (req, res) => {  //need ID to bring one single record
        console.log(req.params.id); //express gives us params, which will have ID
        
        Product.findById(req.params.id) // no {} as it is already an object, the req (request) is already an object
            .then((oneProduct) => {  //this is getting one
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err) => {
                console.log("error was found in the getOne");
                console.log(err);
                res.json(err);
            });
    },

}