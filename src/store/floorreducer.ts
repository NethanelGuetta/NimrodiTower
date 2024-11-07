//Floor slice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    floorAccess: [false, false, false, false, false],
}

export const floorSlice = createSlice({
    name: "floorAccess",
    initialState,
    reducers: {
        changeAccess: (state, action: PayloadAction<number>) => {
            state.floorAccess[action.payload] = !state.floorAccess[action.payload];
        },
     
    },
});
    
export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;
