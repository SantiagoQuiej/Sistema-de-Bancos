import { configureStore } from "@reduxjs/toolkit";
import  LoginPageSlice  from "@/features/login/sliceLogin";
const store = configureStore({
    reducer:{
        login:LoginPageSlice
    }
})
export default store