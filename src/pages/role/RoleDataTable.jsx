import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { activateUpdate, showForm, updateForm, updateTable } from '../../redux/roleSlice';
import DataTable from 'react-data-table-component';
import { paginationComponentOptions } from '../../utils/dataTableConfig';
import TableLoader from '../../components/TableLoader';
import CIcon from '@coreui/icons-react';
import { cilPencil, cilTrash } from '@coreui/icons';
import { TIME_LOADING } from '../../utils/constants';

const RoleDataTable = () => {

  const columns = [
    {
      name: '#',
      selector: row => row.idRole,
      sortable: true,
    }, {
      name: 'Nombre',
      selector: row => row.name,
      sortable: true,
    }, {
      name: 'Código',
      selector: row => row.code,
      sortable: true,
      hide: 'lg'
    }, {
      name: 'Acciones',
      selector: row => <>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteRow(row.idRole)} >
          <CIcon icon={cilTrash}/>
        </button> &nbsp;
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => setData(row)} >
          <CIcon icon={cilPencil}/>
        </button>
      </>,
      hide: 'md'
    }
  ];

  const [list, setList] = useState([])
  const [pending, setPending] = React.useState(true);
  const urlapi = 'http://localhost:8080/role'
  const valueSelector = useSelector( (state) => state.role.value)
  const formSelector = useSelector( (state) => state.role.showForm)
  const dispatch = useDispatch()

  useEffect(() => {
    getAll()
  }, [valueSelector])

  /* Get all users */
  const getAll = () => {
    // setPending(true)
    axios.get(urlapi).then((response) => {
      setList(response.data)
    }).finally(() => {
      setTimeout(() => {
        setPending(false)
      }, TIME_LOADING);
    })
  }

  /* Delete user */
  const deleteRow = (id) => {
    axios.delete(urlapi + '/' + id).then(() => {
      console.log('Delete id:', id);
      dispatch(updateTable(id))
    })
  }

  /* Update set data */
  const setData = (data) => {
    dispatch(updateForm(data))
    dispatch(activateUpdate(true))
  }

  /* Event show/hide form */
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
              <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3 d-grid gap-2">
                <button className="btn btn-sm btn-primary" type="button" onClick={() => eventShowForm()}>
                  <i className="cil-plus icon"></i> Agregar Nuevo
                </button>
              </div>
            </div>

            <div className="row justify-content-center mt-2">
              <div className="col-11">
              <DataTable
                columns={columns}
                data={list}
                pagination
                paginationComponentOptions={paginationComponentOptions}
                progressPending={pending}
                progressComponent={<TableLoader />} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default RoleDataTable