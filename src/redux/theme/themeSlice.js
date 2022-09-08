import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        darkMode: false
    },
    reducers: {
        changeMode: (state, action) => {
            state.darkMode = !state.darkMode
        }
    },
    extraReducers: {

    }
})

export const { changeMode } = themeSlice.actions;

export default themeSlice.reducer;