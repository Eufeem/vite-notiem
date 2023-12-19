import { CSpinner } from '@coreui/react'
import React from 'react'

const TableLoader = () => {
  return (
    <div className="d-flex justify-content-center">
      <CSpinner 
        size='sm'
        color='primary'
        className="m-5"
        style={{ width: '3rem', height: '3rem'}} />
    </div>
  )
}

export default TableLoader