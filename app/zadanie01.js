//Twój kod
const express = require('express');

const app = express();


app.get('/suma/:a/:b',(req,res)=>{
    const a = req.params.a;
    const b = req.params.b;
    const suma = parseInt(a)+parseInt(b);
    res.send(`Suma ${a} + ${b} = ${suma}`)
});


app.listen(3000,()=>{
    console.log('Serwer uruchomiony na porcie 3000');
});