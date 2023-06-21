const router = require('express').Router();
const { Post } = require('../models/');
// TODO: Go to '../utils/auth' and complete middleware function
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // TODO: 1. Find all Posts for a logged in user (use the req.session.userId)
    // const allPosts = await Post.findAll({
    //   where: { user_id: req.session.user_id },

    // })
    // TODO: 2. Serialize data (use .get() method, or use raw: true, nest: true in query options)
    const organizedPosts = allPosts.map((blog) => blog.get({ plain: true }))
      
    // TODO: 3. Render the 'all-posts-admin' template in the 'dashboard' layout with the posts data

    res.render('all-posts-admin')
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    // TODO: 1. Find a Post by primary key
    // TODO: 2. Serialize data (use .get() method, or use raw: true, nest: true in query options)
    // TODO: 3. Render the 'edit-post' template in the 'dashboard' layout with the post data


  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
