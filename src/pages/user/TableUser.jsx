import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TableUser = () => {

  const [list, setList] = useState([])
  const [count, setCount] = useState(0)
  const header = ['#', 'Nombre', 'Apellido', 'Username', 'Email', 'Estatus', 'Acciones']
  const urlapi = 'http://localhost:8080/user'

  useEffect(() => {
    getAll()
  }, [count])

  const getAll = () => {
    axios.get(urlapi).then((response) => {
      setList(response.data)
    })
  }

  const deleteItem = (id) => {
    axios.delete(urlapi + '/' + id).then((res) => {
      console.log('Delete id:', id);
    }).finally(() => {
      setCount(count + 1)
    })
    alert(id)
  }

  return (
    <div className="row mt-3 mb-3 justify-content-center">
      <div className="col-md-12">
        <div className="card border-start-3" style={{ width: '100%', borderLeftColor: '#042c93' }}>
          <div className="card-header">
            Gestión Usuarios
          </div>

          <div className="card-body">
            <h5 className="card-title">Agregar Usuario</h5>
            <div className="row justify-content-center">
              <div className="col-11">
                <table className="table">
                  <thead className="table-light">
                    <tr className='text-center'>
                      {
                        header.map((row, index) => (<th key={index}>{row}</th>))
                      }
                    </tr>
                  </thead>
                  <tbody>
                    {
                      list.map((data, index) => (
                        <tr key={index} className='align-middle text-center'>
                          <td>{data.idUser}</td>
                          <td>{data.name}</td>
                          <td>{data.lastName}</td>
                          <td>{data.username}</td>
                          <td>{data.email}</td>
                          <td>
                            {
                              data.status == 1 ? (<span className="badge bg-primary">Activo</span>) :
                                (<span className="badge bg-dark">Inactivo</span>)
                            }
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => deleteItem(data.idUser)}>
                              Eliminar
                            </button> &nbsp;
                            <button
                              type="button"
                              className="btn btn-warning">
                              Editar
                            </button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableUser