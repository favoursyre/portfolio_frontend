///This file acts as the state management library for this app

///Libraries --> 
import { configureStore } from "@reduxjs/toolkit"
import hireStatusReducer from "./modal"

///Commencing the code
export default configureStore({
    reducer: {
        hireStatus: hireStatusReducer
    }
})