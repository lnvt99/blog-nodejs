const Blog = require('../models/Blogs');
const { loopItemFromArrToObj } = require('../../util/mongoose')

class SiteController {
  // [GET] /
  index(req, res) {
      Blog.find({})
          .then(blogs => {
            res.render('home', {
              blogs: loopItemFromArrToObj(blogs)
            });
          })
          .catch(error => error);
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
