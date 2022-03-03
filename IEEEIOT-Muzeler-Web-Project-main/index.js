const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter')
const ejs = require('ejs')
const path = require('path')
const router = require('./routers/router')

app.set('view engine', 'ejs') //set ile atama yapıyoruz??

app.use(express.json());

app.use('/deneme', userRouter)

app.use('/', router)

app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT || 3000, () => {
    console.log("Sunucu çalıştı");
})