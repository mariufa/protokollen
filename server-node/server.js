
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose'),
    cors = require('cors'),
    jwt = require('jsonwebtoken'),
    User = require('./api/models/user.server.model'),
    Protocol = require('./api/models/protocol.server.model'),
    bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Protokollendb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], 'Protokollen', function (err, decode) {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

var userRoutes = require('./api/routes/user.server.routes');
userRoutes(app);
var protocolRoutes = require('./api/routes/protocol.server.routes');
protocolRoutes(app);


app.listen(port);

console.log('Protokollen nodejs REST API server started on: ' + port);