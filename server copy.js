import express from 'express';
import colors from 'colors';

const app = express();
const port = 3000;

app.get('/', (req, res, next) =>{
    res.send('Hola mundo!')
});

app.listen(port);
console.log(`Server on port: ${port}`.blue);