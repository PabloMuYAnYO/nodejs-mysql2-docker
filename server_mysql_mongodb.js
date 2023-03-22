import express from 'express';
import colors from 'colors';
import mysql from 'mysql2/promise';
// import mongoose from 'mongoose';
import { HOST, PORT, USER, PASSWORD } from "./env";

const app = express();
const port = 3000;

// mongoose.set('strictQuery', false);

const cliente =  mysql.createPool({
    host: HOST,
    port: PORT,
    user: USER,
    password: PASSWORD
});

const [response] = await cliente.query('SELECT 1 + 1');
console.log(response);

// const mongoConnection = mongoose.connect('mongodb://localhost:27017/twichdb');

app.listen(port);
// console.log(mongoConnection.connection.databasename);
console.log(`Server on port: ${port}`.blue);