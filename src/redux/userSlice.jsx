import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateTableUser: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { updateTableUser } = userSlice.actions;
export default userSlice.reducer;