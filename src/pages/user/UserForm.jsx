import React from 'react'

const UserForm = () => {
  return (
    <div className="row mt-3 justify-content-center">
      <div className="col-md-12">
        <div className="card border-start-3" style={{ width: '100%', borderLeftColor: '#042c93' }}>
          <div className="card-header">
            Formulario Usuarios
          </div>

          <div className="card-body">
            <h5 className="card-title">Agregar Usuario</h5>

            {/* Form */}
            <form autoComplete="off"> 
              <div className="row mt-3">
                <div className="col-md-4 mb-3">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre"/>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="lastName" className="form-label">Apellido Paterno</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Ingresa tu apellido paterno" />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="userName" className="form-label">Username</label>
                  <input type="text" className="form-control" id="userName" placeholder="Ingresa tu username" />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="text" className="form-control" id="password" placeholder="Ingresa tu contraseña" />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Estatus</label>
                  <select className="form-select" defaultValue={1} aria-label="Default select example" id="status">
                    <option value="1">Activo</option>
                    <option value="0">Inactivo</option>
                  </select>
                </div>
              </div>

              <div className="row mt-3 justify-content-center">
                <div className="col-md-4 d-grid gap-2">
                  <button className="btn btn-primary" type="button">Agregar</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default UserForm