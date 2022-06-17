const express = require('express');
app = express();
app.use(express.json());
var cors = require('cors');
const { sequelize, User } = require('./models');
const bcrypt = require('bcrypt')
const bodyParser= require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true})) 
sequelize.sync({ force: false })
 .then(() => {
    console.log('sql 데이터베이스 연결 성공');
 })

let db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://minseo:lee2030@cluster0.nfdv5vj.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
    app.listen(8080, () => {
        db = client.db('Ridi');
        console.log('listening on 8080');
    });
});

app.post('/login', async (req, res) => {
    const { id, paw } = req.body
    try {
        const exUser = await User.findOne({ where: {id: id } })
        if(exUser){
            const result = await bcrypt.compare(paw, exUser.password )
            if(result){
                res.json({done: true, comment: "로그인에 성공했습니다", id: exUser.id, username: exUser.username })
                console.log("성공확인")
            } else {
                res.json({done: false, comment: "패스워드가 일치하지 않습니다"})
            }
        } else {
            res.json({done: false, comment: "입력하신 아이디를 다시 확인해주세요"});
        }
    } catch(e) {
        console.log(e);
        res.json({ done: false ,comment: "에러처리가 안된 에러가 발생했습니다."});
    }
})

app.post('/join', async (req, res, next) => {

    const { userId, userPw, userEmail, userName, userAge, genderCheck} = req.body;
    try {
        const exUser = await User.findOne({ where: { id: userId } });
        if(!exUser) {
            let legPass =/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+~=-])(?=.*[0-9]).{8,25}$/
            if(legPass.test(userPw)){
                if(userAge.length == 4 && Number(userAge)){
                    var regExp =/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
                    if(regExp.test(userEmail)){
                        const hash = await bcrypt.hash(userPw, 12);
                        await User.create({
                            id : userId,
                            username : userName,
                            password : hash,
                            birth_year : userAge,
                            gender : genderCheck
                        })
                        console.log("확인용");
                        res.json({done: true, comment: "아이디 생성 완료됐습니다."});
                    }else {
                        res.json({done: false, comment: "올바른 이메일 형식이 아닙니다."})
                    }
                } else {
                    res.json({done: false, comment: "x 출생년도 형식이 잘못됐습니다"});
                }
            }else{
                res.json({done: false, comment: "비밀번호 유효성 검사 통과 실패"});
            }
        } else {
            res.json({done: false, comment: "아이디 중복됐습니다."});
        }
    } catch(e){
        console.log(e)
        res.json({done: false, comment: "에러처리가 안된 에러가 발생했습니다."});
    }
})