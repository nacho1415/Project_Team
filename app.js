const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');

dotenv.config();
const pageRouter = require('./routes/page');

const app = express();
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});

app.use(morgan('dev')); // 클라이언트에서 무슨 요청이 왔는지 shell에서 확인가능
app.use(express.static(path.join(__dirname, 'public'))); // 보안용. 실제 파일 경로 대신 가짜 파일 경로로 설정
app.use(express.json()); // 바디 파싱을 편하게 client가 json을 서버에 보냈을 때 req.body에 json을 넣어줌1
app.use(express.urlencoded({ extended: true })); // 바디 파싱을 편하게2 client가 form을 보냇을 때 req.body에 넣어줌 
app.use(cookieParser(process.env.COOKIE_SECRET)); // cookieParser를 사용해 쿠키 조작을 편하게
app.use(session({   // 개인마다 저장 공간의 데이터를 바꿔주는 용도
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,  // 자바스크립트를 이용한 공격 방지
        secure: false,
    },
}));

app.use('/', pageRouter);



app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중')
})