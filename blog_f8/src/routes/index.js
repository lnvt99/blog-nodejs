const newsRouter = require('./news');
const siteRouter = require('./site');
const blogRouter = require('./blogs');
const meRouter = require('./me');

function route(app) {
  app.use('/me', meRouter);
  app.use('/blogs', blogRouter);
  app.use('/news', newsRouter);
  app.use('/', siteRouter);

  // app.post('/search', (req, res) => {
  //     // Query parameter
  //     console.log(req.query.q);
  //     // Form Data
  //     console.log(req.body);
  //     res.send('');
  // })
}

module.exports = route;
