import React, { useEffect, useState } from 'react'
import UserTable from './UserTable'
import UserForm from './UserForm'
import axios from 'axios'

const UserPage = () => {

  const [list, setList] = useState(0)
  const urlapi = 'http://localhost:8080/user'

  return (
    <div className="container mt-2">
      <UserForm />
      <UserTable />
    </div>
  )
}

export default UserPage