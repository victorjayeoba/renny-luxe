import { createSlice } from "@reduxjs/toolkit"

export const themeSlicer = createSlice({
    name : "theme",
    initialState: {value: ""},
    reducers :{
        switchTheme:(state, action)=>{
            state.value = action.payload
        }
    }
})

export const {switchTheme} = themeSlicer.actions
export default themeSlicer.reducer
