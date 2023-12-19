import { cilGraph, cilPenAlt, cilUser } from '@coreui/icons'
import { CNavTitle, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'

const routerMenu = [
  { route: 'user', label: 'Usuarios', icon: <CIcon customClassName="nav-icon" icon={cilUser} /> },
  { route: 'role', label: 'Roles', icon: <CIcon customClassName="nav-icon" icon={cilPenAlt} /> },
  { route: 'user-role', label: 'User Role', icon: <CIcon customClassName="nav-icon" icon={cilGraph} /> },
  { route: 'permissions', label: 'Permisos', icon: <CIcon customClassName="nav-icon" icon={cilGraph} /> },
]

const Sidebar2 = () => {

  return (
    <CSidebar className="sidebar sidebar-show sticky-top" 
      style={{ height: '100vh' }}>
      <CSidebarBrand>Notiem</CSidebarBrand>
      <CSidebarNav>
        <CNavTitle>Administración</CNavTitle>
        {
          routerMenu.map((value) => {
            return (
              <li className="nav-item" key={value.label}>
                <Link className="nav-link" to={value.route}>
                  { value.icon }
                  { value.label }
                </Link>
              </li>
            )
          })
        }
      </CSidebarNav>
      <CSidebarToggler />
    </CSidebar>
  )
}

export default Sidebar2