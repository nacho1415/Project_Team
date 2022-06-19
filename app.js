const express = require('express');
const cors = require('cors');
const { sequelize, User } = require('./models');
const bcrypt = require('bcrypt')
const bodyParser= require('body-parser');
const path = require('path');

const pageRouter = require('./routes/page')
const fileRouter = require('./routes/file')
const loginRouter = require('./routes/login')

const app = express();

app.get('/api', (req, res) => {
    res.send('<h1>hello api</h1>')
})

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true})) 
sequelize.sync({ force: false })
 .then(() => {
    console.log('sql 데이터베이스 연결 성공');
 })

 app.use('/', pageRouter)
 app.use('/', fileRouter)
 app.use('/login', loginRouter);

// let db;
// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect('mongodb+srv://minseo:lee2030@cluster0.nfdv5vj.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
//     app.listen(8080, () => {
//         db = client.db('Ridi');
//         console.log('listening on 8080');
//     });
// });

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

app.listen(8080, () => {
    console.log('서버 실행중!')
})
// var router = express.Router();
// var mysql = require('mysql');
// var fs = require('fs');
// var ejs = require('ejs')


// //파일 관련 모듈
// var multer = require('multer')

// //파일 저장위치와 파일이름 설정
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         //파일이 이미지 파일이면
//         if (file.mimetype == "image/jpeg" || file.mimetype == "image/jpg" || file.mimetype == "image/png") {
//             console.log("이미지 파일이네요")
//             db(null, 'uploads/images');
//         //텍스트 파일이면
//         } else if (file.mimetype == "application/pdf" || file.mimetype == "application/txt" || file.mimetype == "application/octet-stream") {
//             console.log("텍스트 파일이네요")
//         }
//     },
//     //파일이름 설정
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + "-" + file.originalname)
//     }

// })
// //파일 업로드 모듈
// var upload = multer({ storage: storage })

// //파일 업로드 및 디비에 위치 저장
// router.post('/upload_images', upload.single('fileupload'), (req,res) =>{
//     console.log("post")
//     console.log(req.file)
//     console.log(req.file.path)
//     console.log(upload)
//     console.log(upload.storage.getFilename)

//     //파일 위치를 mysql 서버에 저장
//     getConnection().query('insert into myfile(name) values (?)', [req.file.path], () => {
//         res.redirect('/filepage');
//     });
// })

// //파일 페이지 보여주기
// router.get("/filepage", function (req, res) { 
//     console.log("파일 페이지 나와라")
//     //파일 가져올 위치    
//     var path = __dirname + '/../' + 'uploads/images/'    
    
//     fs.readFile('file.html', 'utf-8', function (error, data) {        
//         var queryString = 'select * from myfile'        
//         getConnection().query(queryString, function (error, result) {            
//             if (error) {                
//                 console.log("파일가져올때 에러 발생" + error);                
//                 return            
//             }            
//             res.send(ejs.render(data, {                
//                 data: result            
//             }));        
//         });    
//     })

// })


// //파일 다운로드 눌렀을 때 작동
// router.get('/downbload/uploads/images/:name', (req, res) => {
//     console.log('파일 페이지 나와라')
//     var filename = req.params.name;

//     var file = __dirname + '/../uploads/images/' + filenmae
//     console.log(__dirname)
//     console.log(req.path)
//     console.log(file)
//     res.download(file);
// });


// var pool = mysql.createPool ({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'root',
//     database: 'wow',
//     password: '1111'
// })

// //디비 연결 함수
// function getConnection() {
//     return pool
// }

// module.exports = router