import React from 'react'

const DataTableActions = (row) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => deleteRow(row.id)} >
        Eliminar
      </button> &nbsp;
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => editRow(row)} >
        Editar
      </button>
    </>
  )
}

export default DataTableActions