//Twój kod
const express = require('express');

const app = express();
let name;
let flag = false;

app.get('/name/set/:imie', (req, res) => {
    name = req.params.imie;
    flag = true;
    res.send("Imie: " + name + " zostało zapisane")
});

app.get('/name/show',(req,res)=>{
    if (flag === true) {
        res.send(name);
    }
    res.send("Nie zapisano imienia");
});

app.get('/name/check',(req,res)=>{
    if (flag === true){
        res.send("Aktualne imie: " + name);
    }
    res.send("Imie nie jest zapisane");

});


app.listen(3000,()=>{
    console.log("Serewer uruchomiony na porcie 3000")
});