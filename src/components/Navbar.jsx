import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-notiem border-bottom">
      <div class="container-fluid">
        <a class="navbar-brand">Panel de Administración</a>
        {/* <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}

        <div class="d-flex">
          {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
          <button class="btn btn-outline-primary" type="submit">Cerrar Sessión</button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar