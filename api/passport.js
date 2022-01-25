import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';

//////////////////////////////
// Passport.js
import * as passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

//////////////////////////////
// sample user DB
const DB_USER = [
    { username: "test01", password: "pass", email: "test01@foo.bar.com" },
    { username: "test02", password: "pass", email: "test02@foo.bar.com" },
    { username: "test03", password: "pass", email: "test03@foo.bar.com" },
];

//////////////////////////////
// passportとStrategyの紐づけ
passport.use(new LocalStrategy(
    (username, password, cb) => {
        try {
            const user = DB_USER.find((v) => {
                return v.username === username;
            });

            // 妥当なログインではない
            if (!user) {
                return cb(null, false);
            }

            // 妥当なログインではない
            if (user.password !== password) {
                return cb(null, false);
            }

            // 妥当なログイン
            return cb(null, user);

        } catch (err) {
            // エラー発生
            return cb(err);
        }
    }
));

//////////////////////////////
// passportとセッションの紐づけ
// ユーザーデータからユニークユーザー識別子を取り出す
passport.serializeUser( (user, cb) => {
    cb(null, user.username);
});

// ユニークユーザー識別子からユーザーデータを取り出す
passport.deserializeUser( (username, cb) => {
    const user = DB_USER.find((v) => {
        return v.username === username;
    });

    if (!user) {
        return cb(`ERROR : NO USERNAME -> ${username}`);
    }

    return cb(null, user);
});

//////////////////////////////
// Express
const app = express();
const PORT_NO = 3000;

// etc
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.dirname(__dirname) + '/view');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// session
// Passport.jsでセッションを使うようにする
app.use(session({
    secret: 'keyboard_cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//////////////////////////////
// route

// ログインページ
app.get('/login',
    (req, res) => {
        res.render('login.html');
    }
);

// 認証
app.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login', // 認証失敗した場合の飛び先
        failureFlash: true
    }),
    (req, res) => {
        // 認証成功した場合の処理
        res.redirect('/');
    }
);

// ログイン状態を直接「req.user」から調べる
app.get('/',
    (req, res) => {

        if (!req.user) {
            return res.redirect('/login');
        }

        res.render('home.html', { user: req.user });
    }
);

// ログアウト
app.get('/logout',
    (req, res) => {
        req.logout();    // セッション削除
        res.redirect('/login');
    }
);

app.listen(PORT_NO);