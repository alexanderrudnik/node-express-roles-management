var express = require('express');
const { ROLES } = require('../data')
var router = express.Router();

router.post('/admin', canAccessEndpoint(ROLES.SUPER_ADMIN), (req, res) => {
  res.send('ADD_ADMIN')
})

router.post('/company', canAccessEndpoint(ROLES.SYSTEM_ADMIN), (req, res) => {
  res.send('ADD_COMPANY')
})

router.post('/company-user', canAccessEndpoint(ROLES.COMPANY_ADMIN), (req, res) => {
  res.send('ADD_COMPANY_USER')
})

router.get('/company-data/:companyId', canAccessCompanyData, (req, res) => {
  res.send('GETTING_COMPANY_DATA')
})

function canAccessEndpoint (role) {
  return (req, res, next) => {
    if (req.user.role === role) {
      next()
    } else {
      res.status(403)
      return res.send('NOT_PERMIT')
    }
  }
}

function canAccessCompanyData (req, res, next) {
  const companyId = +req.params.companyId
  if (companyId === req.user.companyId) {
    next()
  }
  else {
    res.status(403)
    return res.send('NOT ACCESSIBLE')
  }
}

module.exports = router;
