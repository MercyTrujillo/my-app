import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        // auth: authSlice.reducer,
     

    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})