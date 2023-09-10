import {configureStore} from "@reduxjs/toolkit";
import titleReducer from "./reducers/title.js";
import { StrangersApi } from "./reducers/Strangers.js";
import {setupListeners} from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        title: titleReducer,
        [StrangersApi.reducerPath]: StrangersApi.reducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(StrangersApi.middleware)
})

setupListeners(store.dispatch);


export default store;