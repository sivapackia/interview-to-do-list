import { createSlice } from "@reduxjs/toolkit";
import User from "./Main.json"


export const Slice=createSlice(
    {
        name:"todolist",
        initialState:{
            Array:[]

        },
        reducers:{
           IsArray:(state,action)=>{
            state.Array=action.payload
           }
        }
    }
)

export default Slice.reducer
export const{ IsArray }=Slice.actions