import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    idUser: 0,
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    status: '',
    value: 0,
    showForm: false,
    isUpdate: false 
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
        updateForm: (state, action) => {
            const { idUser, username, firstName, 
                lastName, password, email, status } = action.payload
            state.idUser = idUser
            state.username = username
            state.firstName = firstName
            state.lastName = lastName
            state.password = password
            state.email = email
            state.status = status
            state.showForm = true
        },
        activateUpdate: (state, action) => {
            state.isUpdate = action.payload
        }
    }
})

export const { updateTableUser, showFormUser, updateForm, activateUpdate } = userSlice.actions;
export default userSlice.reducer; 