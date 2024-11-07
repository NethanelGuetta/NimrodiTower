//Role reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import roles from "../data/roles.json";

const initialState = {
    role: roles[0],
}

export const roleSlice = createSlice({
    name: "role",
    initialState,   
    reducers: {
        setRole: (state, action: PayloadAction<number>) => {
            state = roles[action.payload];
            console.log(action.payload);
            console.log("1:",state);
            
            
        },
        
        
    },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;