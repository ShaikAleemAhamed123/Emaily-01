const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/', (req, res) => {
    res.send("Home Page....")
  });

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/auth/google' }),
    function (req, res) {
      res.send("Call Back Page....")
    });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
