const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
const port = 3000;
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
  optionsSuccessStatus: 200
}))

const sess = {
  secret: 'secretsecretsecret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1)
  sess.cookie.secure = true
}

app.use(session(sess))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/', (req, res) => {res.sendFile(__dirname + '/login.html');});
app.get('/', (req, res) => {console.log(req);});

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: '27822750',
  database: 'login_db'
});


app.post('/', (req, res) => {
  console.log(req.body);
  connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
    const userid = req.body.id;
    const password = req.body.password;
    console.log(userid);


    const sql = "SELECT password FROM users WHERE user_id = ?";
    connection.query(sql, userid, (error, results, fields) => {
      if (error) throw error;
      console.log(results);


      if (results == "" || password !== results[0]['password']) {
        res.send('null');
        console.log(userid);
    } else {
        req.session.regenerate((err) => {
        req.session.userid = userid;
        console.log('ok');
        res.send(userid);
      });
      }
    }
    );


  });


});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/');
  });
});

app.use((req, res, next) => {
  if (req.session.userid) {
    next();
  } else {
    res.redirect('/');
  }
});

app.get('/user', (req, res) => {
  res.send('Hello ' + req.session.userid);
  console.log('認証OK');
});



app.listen(port,() => {console.log(`listening on *:${port}`);});

