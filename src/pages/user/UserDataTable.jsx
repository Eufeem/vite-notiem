import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateUpdate, showFormUser, updateForm, updateTableUser } from "../../redux/userSlice";
import { paginationComponentOptions } from "../../utils/dataTableConfig";
import TableLoader from "../../components/TableLoader";
import DataTable from "react-data-table-component";
import CIcon from "@coreui/icons-react";
import { cilPencil, cilTrash } from "@coreui/icons";
import { TIME_LOADING } from "../../utils/constants";

const UserDataTable = () => {

  const columns = [
    {
      name: '#',
      selector: row => row.idUser,
      sortable: true,
    }, {
      name: 'Username',
      selector: row => row.username,
      sortable: true,
    }, {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    }, {
      name: 'Rol',
      selector: row => row.role.name,
      sortable: true,
    }, {
      name: 'Status',
      selector: row => <>
        {
          row.status == 1 ? (
            <span className="badge bg-success">Activo</span>
          ) : (
            <span className="badge bg-dark">Inactivo</span>
          )
        }
      </>,
      sortable: true,
    }, {
      name: 'Acciones',
      selector: row => <>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteRow(row.idUser)} >
          <CIcon icon={cilTrash} />
        </button> &nbsp;
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => setData(row)} >
          <CIcon icon={cilPencil} />
        </button>
      </>,
      hide: 'md'
    }
  ];

  const [list, setList] = useState([])
  const [pending, setPending] = useState(true);
  const urlapi = 'http://localhost:8080/user'
  const valueSelector = useSelector((state) => state.user.value)
  const formSelector = useSelector((state) => state.user.showForm)
  const dispatch = useDispatch()

  useEffect(() => {
    getAll()
  }, [valueSelector])

  /* Get all users */
  const getAll = () => {
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
    <div className={"row mt-3 mb-3 justify-content-center " + (formSelector ? 'd-none' : '')}>
      <div className="col-md-12">
        <div className="card border-start-3" style={{ width: '100%', borderLeftColor: '#042c93' }}>
          <div className="card-header">
            Gestión Usuarios
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

export default UserDataTable