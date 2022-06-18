const express = require('express');

const router = express.Router();
// let db;
// const MongoClient = require('mongodb').MongoClient
// var url = 'mongodb://localhost:27017/DATABASE';

router.get('/signup', (req, res) => {
    res.render('page1', { title: '데이터 전달 가능' });
});

// router.post("/signup", (req,res)  => {  << 실험용 나중에 지울게요
//    res.render("page1")
//     MongoClient.connect(url, (err, data) => {
//         if(err) {
//             console.log("MongoDB 연결 실패", err);
//             return;
//         }
//         db = database;
//         console.log("??", db)
//         return 
//     })
// })

router.get('/page1', (req, res) => {
    console.log("12312")
    res.render('page1', { title: '데이터 전달 가능' });
});


router.get('/', (req, res) => {
    res.render('main', { title: '데이터 전달 가능' });
});



module.exports = router;