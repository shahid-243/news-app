import {put, takeLatest} from "redux-saga/effects";
import { GET_NEWS_START } from "../constants/news.constant";
import { getNewsError, getNewsSuccess} from "../actions/news.action";
import { getNewsByApi } from "../services/news.service";

function* getNews(){
    try {
       let news = yield getNewsByApi();
    yield put(getNewsSuccess(news))
    } catch (error) {
        yield put(getNewsError(error.message))
    }
}

export default function* news(){
    yield takeLatest(GET_NEWS_START, getNews)
}