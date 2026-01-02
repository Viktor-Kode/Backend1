const express = require('express');

const app = express()
app.get('/dashboard', (req, res)=>{
    res.json({message: "hellow user"})
})
app.get('/', (req, res)=>{
    res.json({
        name: "victor",
        age: 18,
        gender: "male"
    })
})
const PORT = 5001;

 app.listen(PORT, ()=>{
    console.log(`server listening to ${PORT}`);
    
})


