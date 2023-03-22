import express from 'express';
import {v4} from 'uuid';
import mongoose from 'mongoose';
import colors from 'colors';

const app = express();
const port = 3000;

const db = await moongoose.connect('mongodb://nodemongo/pruebadb');
console.log(db.connection.db.databaseName);

const ProductSchema = new mongoose.Schema({
    name: String
})

const ProductModel = mongoose.model('Product', ProductSchema);

app.get('/', async(req, res) =>{
    // res.send('<h1>Hola mundo!</h1>');

    const newProduct = await ProductModel.create({
        name: Laptop
    })

    res.json({
        id: v4(),
        newProduct
    })
});

app.listen(port);
console.log(`Server on port: ${port}`.blue);

// * Servers
// docker run --name server1 -p 8080:3000 pable/nodejs-mysql2-docker