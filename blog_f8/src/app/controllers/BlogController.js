const Blog = require('../models/Blogs');
const { itemObject } = require('../../util/mongoose')

class BlogController {

  // [GET] /blogs/:slug
  show(req, res, next) {
    Blog.findOne({ slug: req.params.slug })
      .then(blog =>
        res.render('blogs/show', { blog: itemObject(blog) })
      )
      .catch(next);
  }

  // [GET] /blogs/create
  create(req, res, next) {
    res.render('blogs/create');
  }

  // [POST] /blogs/store
  store(req, res, next) {
    const newBlog = new Blog(req.body);
    newBlog.save()
      .then(() => res.redirect('/me/stored/blogs'))
      .catch(error => res.send(error))
  }

  // [GET] /blogs/:id/edit
  edit(req, res, next) {
    Blog.findById(req.params.id)
      .then(blog => res.render('blogs/edit', {
        blog: itemObject(blog)  
      }))
      .catch(next);
  }

  // [PUT] /blogs/:id - POST
  update(req, res, next) {
    Blog.updateOne({ _id: req.params.id}, req.body)
      .then(() => res.redirect('/me/stored/blogs'))
      .catch(next);
  }

  // [DELETE] /blogs/:id - POST
  delete(req, res, next) {
    Blog.deleteOne({ _id: req.params.id  })
      .then(() => res.redirect('back'))
      .catch(next);
  }

}

module.exports = new BlogController();
