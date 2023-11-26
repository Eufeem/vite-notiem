import React, { useEffect, useState } from 'react'
import TableUser from './TableUser'
import UserForm from './UserForm'
import axios from 'axios'

const UserPage = () => {

  const [list, setList] = useState(0)
  const urlapi = 'http://localhost:8080/user'

  return (
    <div className="container mt-2">
      <UserForm />
      <TableUser />
    </div>
  )
}

export default UserPage