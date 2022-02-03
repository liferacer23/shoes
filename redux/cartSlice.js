import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        shoes:[],
        quantity:0,
        total:0
    },
    reducers:{
        addShoes:(state,action)=>{
            state.shoes.push(action.payload)
            state.quantity+=1
            state.total+=action.payload.FinalPrice
        },
        reset:()=>{
            state=initialState
        }
    }
});
export const {addShoes,reset}=cartSlice.actions;
export default cartSlice.reducer;