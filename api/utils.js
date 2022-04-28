function requireUser(req, res, next) {
  if (!req.user) {
    res.send({
      name: 'User Error',
      message: 'You must be logged in to perform this action',
    });
  }
  next();
}

function requireAdmin(req, res, next) {
  if (req.user) {
    if (req.user.isAdmin === false) {
      res.send({
        name: 'User Error!',
        message: 'You must be logged in, and an admin to perform this action.',
      });
    } else if (req.user.isAdmin === true) {
      next();
    }
  } else {
    res.send({
      name: 'Login Error',
      message: 'No user is logged in.',
    });
  }
}

module.exports = {
  requireAdmin,
  requireUser,
};
