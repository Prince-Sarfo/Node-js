// const {v4 : uuid4}  = require('uuid');
// console.log(uuid4());

// express
const express = require('express');
app = express();
const PORT = 3000;

app.get('/',(req, res) =>{
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});


