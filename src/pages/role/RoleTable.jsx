import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTable, showForm, updateForm, activateUpdate } from '../../redux/roleSlice'

const RoleTable = () => {

  const [list, setList] = useState([])
  const header = ['#', 'Nombre', 'Codigo', 'Acciones']
  const urlapi = 'http://localhost:8080/role'
  const valueSelector = useSelector( (state) => state.role.value)
  const formSelector = useSelector( (state) => state.role.showForm)
  const dispatch = useDispatch()

  useEffect(() => {
    getAll()
  }, [valueSelector])

  /* Get all users */
  const getAll = () => {
    axios.get(urlapi).then((response) => {
      setList(response.data)
    }) 
  }

  /* Delete user */
  const deleteItem = (id) => {
    axios.delete(urlapi + '/' + id).then((response) => {
      console.log('Delete id:', id);
      dispatch(updateTable(id))
    })
  }

  /* Update set data */
  const setData = (data) => {
    dispatch(updateForm(data))
    dispatch(activateUpdate(true))
  }

  const eventShowForm = () => {
    dispatch(showForm(true))
  }

  return (
    <div className={"row mt-3 mb-3 justify-content-center " + (formSelector ? 'd-none' : '')}>
      <div className="col-md-12">
        <div className="card border-start-3" style={{ width: '100%', borderLeftColor: '#042c93' }}>
          <div className="card-header">
            Gestión Roles
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
                            <td>{data.idRole}</td>
                            <td>{data.name}</td>
                            <td>{data.code}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => deleteItem(data.idRole)}>
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

export default RoleTable