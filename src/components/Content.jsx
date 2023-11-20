import React from 'react'
import Navbar from './Navbar'

const Content = () => {
  return (
      <div className="container mt-2 ms-1 me-1">
        {/* <div className="row">
        <div className="col-md-12">
          <div className="card border-top-3" style={{ width: '100%', borderTopColor: '#042c93' }}>
            <div className="card-header">
              Titulo principal
            </div>

            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div> */}

        <div className="row mt-3 justify-content-center">
          <div className="col-md-11">
            <div className="card border-start-3" style={{ width: '100%', borderLeftColor: '#042c93' }}>
              <div className="card-header">
                Formulario Usuarios
              </div>

              <div className="card-body">
                <h5 className="card-title">Agregar Usuario</h5>

                <form>
                  <div className="row mt-3">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="name" className="form-label">Nombre</label>
                      <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="lastName" className="form-label">Apellido Paterno</label>
                      <input type="text" className="form-control" id="lastName" placeholder="Ingresa tu apellido paterno" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="job" className="form-label">Ocupación</label>
                      <input type="text" className="form-control" id="job" placeholder="Ingresa tu ocupación" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="age" className="form-label">Edad</label>
                      <input type="email" className="form-control" id="age" placeholder="Ingresa tu edad" />
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

        <div className="row mt-3 justify-content-center">
          <div className="col-md-11">
            <div className="card border-start-3" style={{ width: '100%', borderLeftColor: '#042c93' }}>
              <div className="card-header">
                Formulario Usuarios
              </div>

              <div className="card-body">
                <h5 className="card-title">Agregar Usuario</h5>

                <form>
                  <div className="row mt-3">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="name" className="form-label">Nombre</label>
                      <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="lastName" className="form-label">Apellido Paterno</label>
                      <input type="text" className="form-control" id="lastName" placeholder="Ingresa tu apellido paterno" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="job" className="form-label">Ocupación</label>
                      <input type="text" className="form-control" id="job" placeholder="Ingresa tu ocupación" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="age" className="form-label">Edad</label>
                      <input type="email" className="form-control" id="age" placeholder="Ingresa tu edad" />
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

        <div className="row mt-3 justify-content-center">
          <div className="col-md-11">
            <div className="card border-start-3" style={{ width: '100%', borderLeftColor: '#042c93' }}>
              <div className="card-header">
                Formulario Usuarios
              </div>

              <div className="card-body">
                <h5 className="card-title">Agregar Usuario</h5>

                <form>
                  <div className="row mt-3">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="name" className="form-label">Nombre</label>
                      <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="lastName" className="form-label">Apellido Paterno</label>
                      <input type="text" className="form-control" id="lastName" placeholder="Ingresa tu apellido paterno" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="job" className="form-label">Ocupación</label>
                      <input type="text" className="form-control" id="job" placeholder="Ingresa tu ocupación" />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="age" className="form-label">Edad</label>
                      <input type="email" className="form-control" id="age" placeholder="Ingresa tu edad" />
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


      </div>
  )
}

export default Content