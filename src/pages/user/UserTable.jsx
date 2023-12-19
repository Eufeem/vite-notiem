import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTableUser, showFormUser, updateForm, activateUpdate } from '../../redux/userSlice'

const UserTable = () => {

  const [list, setList] = useState([])
  const header = ['#', 'Nombre', 'Apellido', 'Username', 'Email', 'Estatus', 'Acciones']
  const urlapi = 'http://localhost:8080/user'
  const userSelector = useSelector( (state) => state.user.value )
  const userFormSelector = useSelector( (state) => state.user.showForm )
  const dispatch = useDispatch()

  useEffect(() => {
    getAll()
  }, [userSelector])

  /* Get all users */
  const getAll = () => {
    axios.get(urlapi).then((response) => {
      setList(response.data)
    }) 
  }

  /* Delete user */
  const deleteItem = (id) => {
    axios.delete(urlapi + '/' + id).then( () => {
      console.log('Delete id:', id);
      dispatch(updateTableUser(id))
    })
  }

  /* Update set data */
  const setData = (data) => {
    dispatch(updateForm(data))
    dispatch(activateUpdate(true))
  }

  const eventShowForm = () => {
    dispatch(showFormUser(true))
  }

  return (
    <div className={"row mt-3 mb-3 justify-content-center " + (userFormSelector ? 'd-none' : '')}>
      <div className="col-md-12">
        <div className="card border-start-3" style={{ width: '100%', borderLeftColor: '#042c93' }}>
          <div className="card-header">
            Gestión Usuarios
          </div>
          
          <div className="card-body">
            <div className="row mt-1">
              <div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 d-grid gap-2">
                <button className="btn btn-sm btn-primary" type="button" onClick={() => eventShowForm()}>
                  <i className="cil-plus icon"></i> Agregar Nuevo
                </button>
              </div>
            </div>

            <div className="row justify-content-center mt-2">
              <div className="col-11">
                <div className="table-responsive">
                  <table className="table mt-2">
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
                            <td>{data.username}</td>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.email}</td>
                            <td>
                              {
                                data.status == 1 ? (
                                  <span className="badge bg-success">Activo</span>
                                ) : (
                                  <span className="badge bg-dark">Inactivo</span>
                                )
                              }
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => deleteItem(data.idUser)}>
                                <i className="cil-trash icon"></i> Eliminar
                              </button> &nbsp;
                              <button
                                type="button"
                                className="btn btn-warning"
                                onClick={() => setData(data)}>
                                <i className="cil-pencil icon"></i> Editar
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
    </div>
  )
}

export default UserTable