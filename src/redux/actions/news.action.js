import { GET_NEWS_ERROR, GET_NEWS_START, GET_NEWS_SUCCESS } from "../constants/news.constant"
import { GET_CATEGORY_ERROR, GET_CATEGORY_START, GET_CATEGORY_SUCCESS } from "../constants/news.constant"

export const getNewsStart = () => ({
    type: GET_NEWS_START
})

export const getNewsSuccess = (news) => ({
    type: GET_NEWS_SUCCESS,
    payload: news
})

export const getNewsError = (error) => ({
    type: GET_NEWS_ERROR,
    payload: error 
})

export const getCategoryStart = () => ({
    type: GET_CATEGORY_START
})

export const getCategorySuccess = (news) => ({
    type: GET_CATEGORY_SUCCESS,
    payload: news
})

export const getCategoryError = (error) => ({
    type: GET_CATEGORY_ERROR,
    payload: error 
})