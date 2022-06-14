// 회원가입
const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn} = require('./middlewares');
const { application } = require('express');
const router = require('./page');
const MongoClient = MongoClient.connect('mongodb+srv://minseo:lee2030@cluster0.nfdv5vj.mongodb.net/?retryWrites=true&w=majority',(err, client) => {
    User = client.db('RIDI').collection('User')
    console.log("DB연결완료");
}) 

router.post('/join', async (req, res, next) => {
    const { email, nick, password } = req.body;
    try {
        const exUser = await User.findOne({ name: email });
        if(exUser) {
            return res.redirect('join?error=exist');
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            email,
            nick,
            password: hash,
        });
        return res.redirect('/');
    } catch(e) {
        console.error(error);
        return next(error);
    }
})

// router.join('/join', async (req, res, next) => {
//     const { email, password } = req.body;
//     try {
//         const exUser = await 
//     }
// )


// router.post('/signup', async (req, res, next) => {

// }