var express = require('express')
var app = express()
var router = express.Router();
var mysql = require('mysql');
var fs = require('fs');
var ejs = require('ejs')


//파일 관련 모듈S
var multer = require('multer')

//파일 저장위치와 파일이름 설정
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //파일이 이미지 파일이면
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/jpg" || file.mimetype == "image/png") {
            console.log("이미지 파일이네요")
            cb(null, 'uploads/images');
            console.log("2")
        //텍스트 파일이면
        } else if (file.mimetype == "application/pdf" || file.mimetype == "application/txt" || file.mimetype == "application/octet-stream") {
            console.log("텍스트 파일이네요")
        }
    },
    //파일이름 설정
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }

})
//파일 업로드 모듈
var upload = multer({ storage: storage })

//파일 업로드 및 디비에 위치 저장
router.post('/upload_images', upload.single('fileupload'), (req,res) =>{
    console.log("post")
    console.log(req.file)
    console.log(req.file.path)
    console.log(upload)
    console.log(upload.storage.getFilename)

    //파일 위치를 mysql 서버에 저장
    getConnection().query('insert into myfile values', [req.file.path], () => {
        res.redirect('/filepage');
    });
})

//파일 페이지 보여주기
router.get("/filepage", function (req, res) { 
    console.log("파일 페이지 나와라")
    //파일 가져올 위치    
    var path = __dirname + '/../' + 'uploads/images/'    
    
    fs.readFile('views/file.html', 'utf-8', function (error, data) {        
        var queryString = 'select * from myfile'        
        console.log("12213")
        getConnection().query(queryString, function (error, result) {            
            console.log("123545")
            if (error) {                
                console.log("파일가져올때 에러 발생" + error);                
                return            
            }            
            console.log("123")
            res.send(ejs.render(data, {                
                data: result            
            }));        
        });    
    })

})


//파일 다운로드 눌렀을 때 작동
router.get('/downbload/uploads/images/:name', (req, res) => {
    console.log('파일 페이지 나와라')
    var filename = req.params.name;

    var file = __dirname + '/../uploads/images/' + filename
    console.log(__dirname)
    console.log(req.path)
    console.log(file)
    res.download(file);
});


var pool = mysql.createPool ({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'ridi_dev',
    password: 'lee2030!'
})

//디비 연결 함수
function getConnection() {
    return pool
}

module.exports = router