const express = require('express');

const router = express.Router();

router.get('/page1', (req, res) => {
    res.render('page1', { title: '데이터 전달 가능' });
});

router.get('/page2', (req, res) => {
    res.render('page2', { title: '데이터 전달 가능' });
});

router.get('/page3', (req, res) => {
    res.render('page3', { title: '데이터 전달 가능' });
});

router.get('/page4', (req, res) => {
    res.render('page4', { title: '데이터 전달 가능' });
});

router.get('/', (req, res) => {
    res.render('main', { title: '데이터 전달 가능' });
});



module.exports = router;