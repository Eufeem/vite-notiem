import React from 'react'
import RoleForm from './RoleForm'
import RoleTable from './RoleTable'
import RoleDataTable from './RoleDataTable'

const RolePage = () => {
  return (
    <div className="container mt-2">
      <RoleForm />
      {/* <RoleTable /> */}
      <RoleDataTable />
    </div>
  )
}

export default RolePage