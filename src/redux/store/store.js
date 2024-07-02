import {configureStore} from "@reduxjs/toolkit";
import { newsReducer } from "../reducers/news.reducers";
import createSagaMiddleware from "redux-saga";
import news from "../sagas/news.saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:newsReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV ==="development" ? true : false
})

export default store;

sagaMiddleware.run(news)