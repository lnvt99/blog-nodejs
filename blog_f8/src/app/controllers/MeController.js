const Blog = require('../models/Blogs');
const { loopItemFromArrToObj, saveItem } = require('../../util/mongoose')

class MeController {

  // [GET] /me/stored/blogs
  storeBlogs(req, res, next) {
    // Blog.find({deletedAt: null})
    Blog.find({})
      .then(blogs =>
        res.render("me/stored-blog", {
          blogs: loopItemFromArrToObj(blogs)
        }))
      .catch(next);
  }
}

module.exports = new MeController();
