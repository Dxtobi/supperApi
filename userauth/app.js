const express = require("express");
const db = require('./config/config');
const bodyParser = require('body-parser');
const  UserRoutes = require("./routes/user");
const passport = require("passport");
const cors = require('cors');
const helmet = require('helmet')

const app = express();
db.connect();



//security measures and other middleware
app.disable('x-powered-by')
app.use(helmet())
app.use(cors({origin: '*'}));
app.use(passport.initialize());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/api/users', UserRoutes);

app.set('port', process.env.PORT || 3000)

app.listen( process.env.PORT || 3000, () => {
    console.log(`Listening on port ${process.env.PORT || 3000}`);
});