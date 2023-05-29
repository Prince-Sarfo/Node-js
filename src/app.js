// const {v4 : uuid4}  = require('uuid');
// console.log(uuid4());

// express
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery',  false);
app = express();
app.use(express.json());
app.use(express.urlencoded({'extended':true}))
const PORT = 3000;

const Customers =[
    {
        "name": "Prince THE KARMA",
        "industry" : "Tech"
    },
    {
        "name": "Morrison",
        "industry":"Music"
    },
    {
        "name":"Freda",
        "industry": "Government"
    }
]







app.get('/',(req, res) =>{
    res.send("Hello World");
});

app.get('/api/customers', (req, res)=>{
    res.send({"Customers" : Customers});
});


app.post("/api/customers",(req, res)=>{
        res.send(req.body);
        console.log(req.body);
});

app.post('/', (req, res)=>{
    res.send("This is a post request");
});



const start = async() =>{
  try{

    await mongoose.connect('mongodb+srv://Prince:princesarfo@cluster0.7urxoqi.mongodb.net/?retryWrites=true&w=majority');
    app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});

  }

  catch(e){
    console.log(e.message);
  }


}

start();