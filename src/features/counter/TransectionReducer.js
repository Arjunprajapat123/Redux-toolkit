import { createSlice } from "@reduxjs/toolkit";

const TransectionReducer = createSlice({

        name : "Transection",
        initialState : [],

        reducers : {
            addtransection : (state, action) => {
                state.push(action.payload)
                // console.log(action)
            }
        }
})

export default TransectionReducer.reducer
export const {addtransection} = TransectionReducer.actions