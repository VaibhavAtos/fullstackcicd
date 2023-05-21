const express = require('express')
const app = express()

// const mongoose = require('mongoose')
// const passport = require('passport');
var session = require('express-session')
var cors = require('cors')
require('dotenv').config();

const bodyParser = require('body-parser');
// const { MONGODB_URL } = require('./config_key/useKeys')
// var cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 5000
// const MONGOURI = process.env.MONGO_DB_PATH_PROD



// mongoose.connect(MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true

// })
// mongoose.connection.on('connected', () => {
//     console.log("conneted to mongo yeahh")
// })
// mongoose.connection.on('error', (err) => {
//     console.log("err connecting", err)
// })
// var sess = {
    
//     cookie: {}
//   }
  
//   if (app.get('env') === 'production') {
//     app.set('trust proxy', 1) // trust first proxy
//     sess.cookie.secure = true // serve secure cookies
//   }

// require('./modules/dataModule');
// require('./modules/user.model');
// require('./modules/user');


app.use(express.json())

// require('./models/post')
app.use(cors());
app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token, _id'
    );

    next();
});







// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
// app.use(session({ secret: 'somevalue' }));
// app.use(passport.initialize());
// app.use(passport.session());

// require('./config_key/passport')(passport);
app.use(require('./api/dataApi'));







if (process.env.NODE_ENV == "production") {
    app.use(express.static('frontend/build'))
    const path = require('path')
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log("server is running on", PORT)
})