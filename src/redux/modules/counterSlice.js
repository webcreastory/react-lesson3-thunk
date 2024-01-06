// src/redux/modules/counterSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 2개의 INPUT
// (1) 이름 : 의미 크게 없음
// (2) 함수 : 
export const __addNumber = createAsyncThunk(
    // 첫번째 인자 : action value
    // "ADD_NUMBER_WAIT"
    "addNumber",
    // 두번째 인자 : 콜백함수 
    (payload, thunkAPI) => {
        setTimeout(() => {
            thunkAPI.dispatch(addNumber(payload));
        }, 3000);
    }
    );
    
    export const __minusNumber = createAsyncThunk(
    // 첫번째 인자 : action value
    // "MINUS_NUMBER_WAIT"
    "minusNumber",
    // 두번째 인자 : 콜백함수 
    (payload, thunkAPI) => {
        setTimeout(() => {
            thunkAPI.dispatch(minusNumber(payload));
        }, 3000);
    }
);

const initialState = {
    number: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addNumber: (state, action) => {
            state.number = state.number + action.payload;
        },

        minusNumber: (state, action) => {
            state.number = state.number - action.payload;
        },
    },
});


export const { addNumber, minusNumber } = counterSlice.actions;
export default counterSlice.reducer;

