// const {v4 : uuid4}  = require('uuid');
// console.log(uuid4());

// express
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
mongoose.set('strictQuery',  false);
app = express();
app.use(express.json());
app.use(express.urlencoded({'extended':true}));

if(process.env.NODE_ENV !== 'Production'){
    require('dotenv').config();
}

const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION ;


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

    await mongoose.connect(CONNECTION);
    app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});

  }

  catch(e){
    console.log(e.message);
  }


}

start();