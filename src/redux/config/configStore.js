import counter from "../modules/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        counter, 
    },
});

export default store;