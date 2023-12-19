// import UserTable from './UserTable'
import UserForm from './UserForm'
import UserDataTable from './UserDataTable'

const UserPage = () => {

  return (
    <div className="container mt-2">
      <UserForm />
      {/* <UserTable /> */}
      <UserDataTable />
    </div>
  )
}

export default UserPage