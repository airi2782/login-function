const express = require('express');
const router = express.Router();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// const index = router.get("/",(req,res,next) => {res.send('ルーティング完了！')});


const index = router.get("/",(req,res,next) => {res.render('login.js');});

module.exports = router;