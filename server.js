import express, { json } from 'express';
const app=express();
import router from './router/auth-router.js';
import connectDb from './utils/db.js';
import cors from 'cors';
//ES5 module syntax
// const express=require('express');
// const app=express();
// const router=require('./router/auth-router').default;
// const connectDb=require('./utils/db');
// const cors=require('cors');

// const birthdayRouter = require('./router/index.js')
// const {home}=require('./controller/auth-controller');

app.use(cors());
app.use(json());

app.use("/",router);
// app.use('/', birthdayRouter);
// app.get('/',(req,res)=>{
//     res.status(200).send("You are in the Home Page!!");
// });
// app.get('/',home);

// app.get('/register',(req,res)=>{
//     res.status(200).send("<h1>Welcome to the Registration Page !!</h1>");
// });
// app.post('/api/notice', async (req, res) => {
//     const { data } = req.body;
//      Handle data processing and saving to the database
//     res.status(200).json({ message: 'Data received', data });
// });
connectDb().then(()=>{
    app.listen(5000,()=>{
        console.log(`Server is listening on port 5000`);
    });
});