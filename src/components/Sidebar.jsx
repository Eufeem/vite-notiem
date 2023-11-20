import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar sidebar-show sticky-top" style={{ height: '100vh' }}>
      <ul className="sidebar-nav">
        <li className="nav-title">Notiem</li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="nav-icon cil-speedometer"></i> Nav item
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="nav-icon cil-speedometer"></i> With badge 
              &nbsp; <span className="badge bg-primary">NEW</span>
          </a>
        </li>
        <li className="nav-item nav-group">
          <a className="nav-link nav-group-toggle" href="#">
            <i className="nav-icon cil-puzzle"></i> Nav dropdown
          </a>
          <ul className="nav-group-items">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="nav-icon cil-puzzle"></i> Nav dropdown item
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="nav-icon cil-puzzle"></i> Nav dropdown item
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item mt-auto">
          <a className="nav-link nav-link-success" href="https://coreui.io">
            <i className="nav-icon cil-cloud-download"></i> Download CoreUI</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link-danger" href="https://coreui.io/pro/">
            <i className="nav-icon cil-layers"></i> Try CoreUI <strong>PRO</strong>
          </a>
        </li>
      </ul>
      <button className="sidebar-toggler" type="button"></button>
    </div>
  )
}

export default Sidebar