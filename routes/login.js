const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user');

const router = express.Router();

router.post('/', async (req, res) => {
    console.log("11")
    const { id, paw } = req.body
    try {
        const exUser = await User.findOne({ where: {id: id } });
        console.log("여긴가")
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

module.exports = router;