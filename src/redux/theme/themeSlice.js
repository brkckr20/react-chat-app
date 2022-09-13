import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        mode: localStorage.getItem("chat-color-mode"),
    },
    reducers: {
        changeMode: (state, action) => {
            localStorage.setItem("chat-color-mode", action.payload);
        }
    },
    extraReducers: {

    }
})

export const { changeMode } = themeSlice.actions;

export default themeSlice.reducer;