'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app

  //语法糖，里面调用passport生成strategy，并放入/passport/github和/callback的路径中
  app.passport.mount('github')

  router.resources('users', '/api/users', controller.users)
  router.resources('questions', '/api/questions', controller.questions)
  // router.resources('noanswer_question', '/api/questions/noanswer', controller.questions.noanswer)
  router.resources('answers', '/api/answers', controller.answers)
  // router.resources('comments', '/api/comments', controller.comments)
  // router.resources('favs', '/api/favs', controller.favs)


  router.post('/login', app.passport.authenticate('local', { successRedirect: '/authCallback' }), () => {
    debugger
    this
  })
  // router.get('/logedin', controller.auth.loggedIn)
  router.get('/authCallback', controller.auth.authCallback)
  router.get('/verify-token', controller.auth.verifyToken)
};
