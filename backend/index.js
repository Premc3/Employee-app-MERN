const Express = require('express');
const BodyParser = require('body-parser');
const Mongoose = require('mongoose');
const Cors = require('cors');
const bcrpt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { urlencoded } = require('body-parser');

let app =Express();

app.use(BodyParser,urlencoded({extended:true}));
app.use(BodyParser.json());
app.use(Cors());

app.get("/signin",(req,res)=>{
    res.send("signin working");
})
app.get("/adminsignin",(req,res)=>{
    res.send("Signup working")
})
app.post("/users",(req,res)=>{
    res.send("Signup working")
})
app.listen(3001,()=>{
    console.log("Server started")
})