import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-notiem border-bottom">
      <div class="container-fluid">
        <a class="navbar-brand">Panel de Administración</a>
        <div class="d-flex">
          <button class="btn btn-outline-primary" type="submit">Cerrar Sessión</button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar