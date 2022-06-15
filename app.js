const { application } = require('express');
const express = require('express');
const session = require('express-session');
app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());
const bcrypt = require('bcrypt')
const bodyParser= require('body-parser')
// const passport = require('passport')
app.use(bodyParser.urlencoded({extended: true})) 
// app.use(
//     session({
//         secret: 'Hello',
//         resave: true,
//         saveUninitialized: true,
//     })
// );
authRouter = require('./routes/auth');


let db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://minseo:lee2030@cluster0.nfdv5vj.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
    app.listen(8080, () => {
        db = client.db('Ridi');
        console.log('listening on 8080');
    });
});


app.post('/login', async (req, res, next) => {
    const { id, paw } = req.body;
    try {
        const exUser = await db.collection('User').findOne({id : id})
        if(exUser) {
            const result = await bcrypt.compare(paw, exUser.password )
            if(result) {
                res.json({ id: id, comment : "o 로그인이 허가되었습니다"})
                req.login(exUser, () => {
                    console.log("sdadadaw")
                })
                console.log("되나");
            } else {
                res.json({ comment : "x 비밀번호가 일치하지 않습니다" })
            }
        } else {
            res.json({ comment : "x 가입되지 않은 회원입니다." })
        }
    } catch(e){
        console.log(e)
    }
})


// app.post('/login', async (req, res, next) => {

//     const { id, paw } = req.body;
//     try {
//         const exUser = await db.collection('User').findOne({id : id})
//         console.log(exUser)
//         if(exUser) {
//             return res.json('x 아이디 중복')
//         }
//         const hash = await bcrypt.hash(paw, 12);
//         await db.collection('User').insertOne({
//             id: id,
//             password: hash
//         })
//         console.log("아이디 생성완료")
//     }catch(e) {
//         console.log(e)
//         res.json("x 이유 특정 불가");
//     }
// })