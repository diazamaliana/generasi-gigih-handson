import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: [],
};

export const gifsSlice = createSlice({
    name: "gifs",
    initialState,
    reducers : {
        storeImage : (state,action) =>{
            state.images = action.payload;
        }, 
    },
});

// Generate case reducer function
export const { storeImage, incrementByAmount } = gifsSlice.actions;

export default gifsSlice.reducer;