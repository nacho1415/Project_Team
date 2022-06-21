// 회원가입
const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
// const { isLoggedIn, isNotLoggedIn} = require('./middlewares');
const { application } = require('express');
const router = require('./page');
let db; 
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://minseo:lee2030@cluster0.nfdv5vj.mongodb.net/?retryWrites=true&w=majority',(err, client) => {
    User = client.db('Ridi').collection('User')
    console.log("DB연결완료");
}) 

router.post('/login', async (req, res, next) => {
    console.log("??")
    res.json({id: "132", pwd: "123"});
    // const { id, paw } = req.body;
    // try {
    //     const exUser = await User.findOne({ name: id });
    //     if(exUser) {
    //         return res.redirect('join?error=exist');
    //     }
    //     const hash = await bcrypt.hash(paw, 12);
    //     await User.create({
    //         id,
    //         paw: hash,
    //     });
    //     res.json("성공")
    //     return res.redirect('/');
    // } catch(e) {
    //     console.error(error);
    //     return next(error);
    // }
})

router.post('/login', async (req, res, next) => {
    console.log(req);
})

// router.post('/signup', async (req, res, next) => {

// }
module.exports = router;