import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice.jsx'



const store = configureStore({
    reducer:{
        user:userReducer
    }
})
console.log(userReducer);


export  default store