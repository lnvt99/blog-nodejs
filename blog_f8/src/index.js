const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const methodOverride = require('method-override');
const route = require('./routes');
const db = require('./config/db');

// Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());

app.use(methodOverride('_method'));

// Middleware

app.use(middleWare);

function middleWare (req, res, next){
  if(['123456789'].includes(req.query.token)) {
    return next();
  }
  else {
    res.status(403).json({
      message: 'Access denied'
    });
  }
}


// app.get('/middleware', 
//   function(req, res, next){
//     if(['vethuong', 'vevip'].includes(req.query.ve)) {
//       return next();
//     }
//     else {
//       res.status(403).json({
//         message: 'Access denied'
//       });
//     }
//   }, 
//   function(req, res, next){
//     res.json({
//       message: 'Successfully!'
//     })
//   }
// )

// End middleware


// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({
  extname: '.hbs', defaultLayout: 'main', helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
