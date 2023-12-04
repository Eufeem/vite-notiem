import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    idRole: 0,
    name: '',
    code: '',
    value: 0,
    showForm: false,
    isUpdate: false
}

export const roleSlice = createSlice({
    name: 'role',
    initialState,
    reducers: {
        updateTable: (state, action) => {
            state.value = Math.random()
        },
        showForm: (state, action) => {
            state.showForm = action.payload
        },
        updateForm: (state, action) => {
            const { idRole, name, code } = action.payload
            state.idRole = idRole
            state.name = name
            state.code = code
            state.showForm = true
        },
        activateUpdate: (state, action) => {
            state.isUpdate = action.payload
        }
    }
})

export const { updateTable, showForm, updateForm, activateUpdate } = roleSlice.actions
export default roleSlice.reducer;