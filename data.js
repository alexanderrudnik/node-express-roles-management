const ROLES = {
  SUPER_ADMIN: 'superAdmin', // can CRUD other admins
  SYSTEM_ADMIN: 'systemAdmin', // can CRUD companies
  COMPANY_ADMIN: 'companyAdmin', // can CRUD users within the company
  USER: 'user'
}

module.exports = {
  ROLES,
  users: [
    {id: 1, role: ROLES.SUPER_ADMIN, companyId: 10},
    {id: 2, role: ROLES.SYSTEM_ADMIN, companyId: 11},
    {id: 3, role: ROLES.COMPANY_ADMIN, companyId: 12},
    {id: 4, role: ROLES.USER, companyId: 13},
  ]
}
