function basicAuth(req, res, next) {
  if (req.user) {
    next()
  } else {
    res.status(403)
    return res.send('NOT_AUTH')
  }
}

module.exports = {
  basicAuth
}
