import React from 'react'
import { Link } from 'react-router-dom'

const routerMenu = [
  { route: 'user', label: 'Usuarios', icon: 'nav-icon cil-speedometer' },
  { route: 'role', label: 'Roles', icon: 'nav-icon cil-speedometer' },
  { route: 'user-role', label: 'User Role', icon: 'nav-icon cil-speedometer' },
  { route: 'permissions', label: 'Permisos', icon: 'nav-icon cil-speedometer' },
]

const topSidebar = [ 
  { route: 'login', label: 'Cerrar Sesión', icon: 'nav-icon cil-layers' },
  { route: 'report', label: 'Reportar Incidente', icon: 'nav-icon cil-layers' },
]

const Sidebar = () => {
  return (
    <div className="sidebar sidebar-show sticky-top" style={{ height: '100vh' }}>
      <ul className="sidebar-nav">
        <li className="nav-title">Notiem</li>

        {/* <li className="nav-item">
          <Link className="nav-link" to="user">
            <i className="nav-icon cil-speedometer"></i> Usuarios
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="nav-icon cil-speedometer"></i> Roles 
              &nbsp; <span className="badge bg-primary">Nuevo</span>
          </a>
        </li> */}
        {
          routerMenu.map((value, index) => {
            return (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={value.route}>
                  <i className={value.icon}></i> {value.label}
                </Link>
              </li>
            )
          })
        }

        {/* <li className="nav-item mt-auto">
          <a className="nav-link nav-link-success" href="https://coreui.io">
            <i className="nav-icon cil-cloud-download"></i> Descargar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link-danger" href="https://coreui.io/pro/">
            <i className="nav-icon cil-layers"></i> Cerrar <strong>x</strong>
          </a>
        </li> */}
        {
          topSidebar.map((top, index) => {
            return (
              <li className={index > 0 ? 'nav-item' : 'nav-item mt-auto'} key={index}>
                <Link className="nav-link nav-link-success" to={top.route}>
                  <i className={top.icon}></i> {top.label}
                </Link>
              </li>
            )
          })
        }

      </ul>
      <button className="sidebar-toggler" type="button"></button>
    </div>
  )
}

export default Sidebar