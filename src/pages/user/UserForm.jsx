import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { successNotification } from '../../utils/notification';
import { useDispatch } from 'react-redux';
import { updateTableUser } from '../../redux/userSlice';

const UserForm = () => {

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const urlapi = 'http://localhost:8080/user'
  
  const onSubmit = (data) => {
    create(data)
  }
  
  const create = (user) => {
    axios.post(urlapi, user).then((response) => {
      if (response.status == 201) {
        console.log(response.data);
        dispatch(updateTableUser(response.data.idUser))
      }
    }).finally(() => {
      successNotification('Elemento agregado')
      reset()
    }) ;
  }

  return (
    <div className="row mt-3 justify-content-center">
      <div className="col-md-12">
        <div className="card border-start-3" style={{ width: '100%', borderLeftColor: '#042c93' }}>
          <div className="card-header">
            Formulario Usuarios
          </div>
          
          <div className="card-body">
            <div className="row mt-1 mb-2">
              <div className="col-md-2 d-grid gap-2">
                <button className="btn btn-sm btn-primary" type="button">
                  <i className='cil-arrow-left icon'></i> Regresar
                </button>
              </div>
            </div>
            
            {/* <h5 className="card-title">
              Formulario Usuario
            </h5> */}

            {/* Form */}
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} noValidate> 
              <div className="row mt-3">
                {/* Nombre */}
                <div className="col-md-4 mb-3">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input type="text" 
                    className={"form-control " + (errors.name ? 'is-invalid' : '')}
                    id="name"
                    placeholder="Ingresa tu nombre"
                    {...register('name', { required: true, maxLength: 20 })}/>
                    {errors.name && <span className='text-danger'>Nombre es requerido</span>}
                </div>

                {/* Last Name */}
                <div className="col-md-4 mb-3">
                  <label htmlFor="lastName" className="form-label">Apellido Paterno</label>
                  <input type="text" 
                    className={"form-control " + (errors.lastName ? 'is-invalid' : '')}
                    id="lastName" 
                    placeholder="Ingresa tu apellido paterno"
                    {...register('lastName', { required: true, maxLength: 20 })}/>
                    {errors.lastName && <span className='text-danger'>Apellido es requerido</span>}
                </div>

                {/* User name */}
                <div className="col-md-4 mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" 
                    className={"form-control " + (errors.username ? 'is-invalid' : '')}
                    id="username" 
                    placeholder="Ingresa tu usuario"
                    {...register('username', { required: true, maxLength: 20 })}/>
                    {errors.username && <span className='text-danger'>Username es requerido</span>}
                </div>

                {/* Password */}
                <div className="col-md-4 mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="text" 
                    className={"form-control " + (errors.password ? 'is-invalid' : '')}
                    id="password" 
                    placeholder="Ingresa la contraseña"
                    {...register('password', { required: true, maxLength: 20 })}/>
                    {errors.password && <span className='text-danger'>Contraseña es requerido</span>}
                </div>

                {/* Email */}
                <div className="col-md-4 mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="text" 
                    className={"form-control " + (errors.email ? 'is-invalid' : '')}
                    id="email" 
                    placeholder="Ingresa tu email"
                    {...register('email', { required: true, maxLength: 20 })}/>
                    {errors.email && <span className='text-danger'>Email es requerido</span>}
                </div>

                {/* Status */}
                <div className="col-md-4 mb-3">
                  <label className="form-label">Estatus</label>
                  <select className="form-select" defaultValue={1} aria-label="Default select example" id="status"
                  {...register('status', { required: true, maxLength: 20 })}>
                    <option value="1">Activo</option>
                    <option value="0">Inactivo</option>
                  </select>
                </div>
              </div>

              <div className="row mt-3 justify-content-center">
                <div className="col-md-4 d-grid gap-2">
                  <button className="btn btn-success" type="submit">
                    <i className="cil-plus icon"></i> Agregar
                  </button>
                </div>
              </div>
            </form>


          </div>
        </div>
      </div>
    </div>
  )
}

export default UserForm