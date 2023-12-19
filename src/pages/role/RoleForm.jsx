import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { successNotification } from '../../utils/notification';
import { activateUpdate, showForm, updateTable } from '../../redux/roleSlice';

const RoleForm = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors }, watch, reset, setValue } = useForm();
  const urlapi = 'http://localhost:8080/role'
  const formSelector = useSelector( (state) => state.role.showForm)
  const updateSelector = useSelector( (state) => state.role.isUpdate)
  const roleSelector = useSelector( (state) => state.role)

  useEffect(() => {  
    if (updateSelector) {
      console.log(roleSelector)
      console.log(roleSelector.name);
      setValue('name', roleSelector.name)
      setValue('code', roleSelector.code)
      setValue('idRole', roleSelector.idRole)
    }
  }, [updateSelector])
  

  const onSubmit = (data) => {
    create(data)
  }

  const create = (user) => {
    axios.post(urlapi, user).then((response) => {
      if (response.status == 201) {
        console.log(response.data);
        dispatch(updateTable(response.data.idUser))
        eventShowForm()
      }
    }).finally(() => {
      updateSelector ? successNotification('Elemento actualizado') : successNotification('Elemento agregado')
      reset()
    });
  }

  const eventShowForm = () => {
    dispatch(activateUpdate(false))
    dispatch(showForm(false))
    reset()
  }

  return (
    <div className={"row mt-3 justify-content-center " + (formSelector ? '' : 'd-none')}>
      <div className="col-md-12">
        <div className="card border-start-3" style={{ width: '100%', borderLeftColor: '#042c93' }}>
          <div className="card-header">
            Formulario Roles
          </div>
          
          <div className="card-body">
            <div className="row mt-1 mb-2">
              <div className="col-md-2 d-grid gap-2">
                <button className="btn btn-sm btn-primary" type="button" onClick={() => eventShowForm()}>
                  <i className='cil-arrow-left icon'></i> Regresar
                </button>
              </div>
            </div>

            {/* {JSON.stringify(watch()) } */}

            {/* Form */}
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} noValidate> 
              <div className="row mt-3">

                {/* ID */}
                <input type="text" className="d-none" {...register('idRole')} />

                {/* User name */}
                <div className="col-md-4 mb-3">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input type="text" 
                    className={"form-control " + (errors.name ? 'is-invalid' : '')}
                    id="name" 
                    placeholder="Ingresa nombre del rol"
                    {...register('name', { required: true, maxLength: 20 })}/>
                    {errors.name && <span className='text-danger'>Nombre es requerido</span>}
                </div>

                {/* First Name */}
                <div className="col-md-4 mb-3">
                  <label htmlFor="code" className="form-label">Código</label>
                  <input type="text" 
                    className={"form-control " + (errors.code ? 'is-invalid' : '')}
                    id="code"
                    placeholder="Ingresa código del rol"
                    {...register('code', { required: true, maxLength: 20 })}/>
                    {errors.code && <span className='text-danger'>Código es requerido</span>}
                </div>
              </div>

              <div className="row mt-3 justify-content-center">
                <div className="col-md-4 d-grid gap-2">
                  {
                    updateSelector ? (
                      <button className="btn btn-warning" type="submit">
                        <i className="cil-pencil icon"></i> Editar
                      </button>
                      ) : (
                      <button className="btn btn-success" type="submit">
                        <i className="cil-plus icon"></i> Agregar
                      </button>
                        )
                  }
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoleForm