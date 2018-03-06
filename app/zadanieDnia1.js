//Twój kod
const express = require('express');
const app = express();

app.use(express.static('./public/zadanieDnia'));

let resultYes = 0;
let resultNo = 0;
let resultMaybe = 0;
const thx = "Dziękujemy za głos!";

app.get('/vote/:glos',(req,res)=>{
    const glos = req.params.glos;
    if (glos === 'yes') {
        resultYes++;
        res.send(thx);
    } else if(glos==='no'){
        resultNo++;
        res.send(thx);
    } else if (glos === 'maybe') {
        resultMaybe++;
        res.send(thx);
    }
});

app.get('/votes/check',(req,res)=>{
    res.send('Głosów tak: ' + resultYes + '<br/>' +
             'Głosów nie: ' + resultNo + '<br/>' +
             'Głosów maybe: ' + resultMaybe
    );
});

app.listen(3000,()=>{
    console.log("Serwer uruchomiony na porcie 3000");
});