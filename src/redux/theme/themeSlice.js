import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        darkMode: localStorage.getItem("chat-color-mode") || false
    },
    reducers: {
        changeMode: (state, action) => {
            state.darkMode = !state.darkMode
            localStorage.setItem("chat-color-mode", state.darkMode);
        }
    },
    extraReducers: {

    }
})

export const { changeMode } = themeSlice.actions;

export default themeSlice.reducer;