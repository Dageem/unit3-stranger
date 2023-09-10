import { createSlice } from "@reduxjs/toolkit";


const initialState=[];


const titleSlice=createSlice({
    name: "title",
    initialState,
    reducers:{
        addToTitle: (state, action) =>{
            console.log(action);
            state.push(action.payload)
        },
        removeFromTitle: (state, action)=>{
            state.splice(action.payload, 1);
        }
    }
})

// export const {addToTitle, removeFromTitle}= titleSlice.action

export default titleSlice.reducer;