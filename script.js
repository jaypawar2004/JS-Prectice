const express = require('express');
const app = express();
const path = require('path');
 const userModel = require('./userModel');
// 'view engine'
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/name', (req,res)=>{
    res.send('Hello name');
})

app.get('/name/:username', (req,res) => {
req.params.username;
res.send('Chal gya Dynamic Route')
})

app.listen(4000, function(){
    console.log('Server is running on port 4000');
})
