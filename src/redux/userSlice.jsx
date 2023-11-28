import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
        }
    }
})

export const { updateTableUser, showFormUser } = userSlice.actions;
export default userSlice.reducer;