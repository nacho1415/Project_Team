const express = require('express');
const bcrypt = require('bcrypt')

const User = require('../models/user');

const router = express.Router();

router.post('/', async (req, res, next) => {

    const { userId, userPw, userEmail, userName, userAge, genderCheck} = req.body;
    try {
        const exUser = await User.findOne({ where: { id: userId } });
        if(exUser){
            return res.json({done: false, comment: "아이디 중복됐습니다."});
        } 
        let legPass =/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+~=-])(?=.*[0-9]).{8,25}$/
        if(!legPass.test(userPw)){
            return res.json({done: false, comment: "비밀번호 유효성 검사 통과 실패"});
        }
        if(!userAge.length == 4 || !Number(userAge)) {
            return res.json({done: false, comment: "x 출생년도 형식이 잘못됐습니다"})
        }
        var regExp =/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        if(!regExp.test(userEmail)) {
            return res.json({done: false, comment: "올바른 이메일 형식이 아닙니다."})
        }
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
    } catch(e){
        console.log(e)
        res.json({done: false, comment: "에러처리가 안된 에러가 발생했습니다."});
    }
})

module.exports = router