'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app

  //语法糖，里面调用passport生成strategy，并放入/passport/github和/callback的路径中
  app.passport.mount('github')

  router.resources('users', '/api/users', controller.users)
  // router.resources('questions', '/api/questions', controller.questions)
  // router.resources('answers', '/api/answers', controller.answers)
  // router.resources('comments', '/api/comments', controller.comments)
  // router.resources('favs', '/api/favs', controller.favs)

  router.post('/login', app.passport.authenticate('local', { successRedirect: '/authCallback' }))
  router.get('/authCallback', controller.users.authCallback)
};
