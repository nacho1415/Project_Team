const express = require('express');
const cors = require('cors');
const { sequelize, User } = require('./models');
const bcrypt = require('bcrypt')
const bodyParser= require('body-parser');
const path = require('path');

const pageRouter = require('./routes/page')
const fileRouter = require('./routes/file')
const loginRouter = require('./routes/login')
const joinRouter = require('./routes/join')
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
app.use('/join', joinRouter);


app.listen(8080, () => {
    console.log('서버 실행중!')
})