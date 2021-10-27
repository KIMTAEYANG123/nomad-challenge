const express = require('express');
const app = express();
const fs = require('fs')
const port = 3000;


app.use(express.static(__dirname));

app.get('/1',(req,res)=>{
    fs.readFile('./public/views/index.html', (err, data)=>{
        res.type(`text/html`);
        res.send(data);
    });
})

app.get('/2',(req,res)=>{
    fs.readFile('./public/views/2.html', (err, data)=>{
        res.type(`text/html`);
        res.send(data);
    });
})

app.get('/3',(req,res)=>{
    fs.readFile('./public/views/3.html', (err, data)=>{
        res.type(`text/html`);
        res.send(data);
    });
})


app.listen(port, ()=>{ console.log('서버를 킵니다.')})
