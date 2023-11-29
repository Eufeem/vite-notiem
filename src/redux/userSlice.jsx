import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    idUser: 0,
    name: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    status: '',
    value: 0,
    showForm: false 
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateTableUser: (state, action) => {
            state.value = Math.random()
        },
        showFormUser: (state, action) => {
            state.showForm = action.payload 
        },
        updateFields: (state, action) => {
            const { idUser, name, lastName, username,
                    password, email, status, showForm } = action.payload
            state.idUser = idUser
            state.name = name
            state.lastName = lastName
            state.username = username
            state.password = password
            state.email = email
            state.status = status
            state.showForm = showForm
        }
    }
})

export const { updateTableUser, showFormUser, updateFields } = userSlice.actions;
export default userSlice.reducer; 