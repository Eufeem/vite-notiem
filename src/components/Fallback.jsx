import { CSpinner } from "@coreui/react"

const Fallback = () => {
  return (
    <div className="d-flex justify-content-center">
      <CSpinner 
        size='sm'
        color='secondary'
        className="m-5"
        style={{ width: '3rem', height: '3rem'}} />
    </div>
  )
}

export default Fallback