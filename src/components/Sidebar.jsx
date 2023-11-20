import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar sidebar-show sticky-top" style={{ height: '100vh' }}>
      <ul className="sidebar-nav">
        <li className="nav-title">Notiem</li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="nav-icon cil-speedometer"></i> Usuarios
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="nav-icon cil-speedometer"></i> Roles 
              &nbsp; <span className="badge bg-primary">Nuevo</span>
          </a>
        </li>
        <li className="nav-item mt-auto">
          <a className="nav-link nav-link-success" href="https://coreui.io">
            <i className="nav-icon cil-cloud-download"></i> Descargar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link-danger" href="https://coreui.io/pro/">
            <i className="nav-icon cil-layers"></i> Cerrar <strong>x</strong>
          </a>
        </li>
      </ul>
      <button className="sidebar-toggler" type="button"></button>
    </div>
  )
}

export default Sidebar