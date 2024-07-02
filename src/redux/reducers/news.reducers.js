import { GET_NEWS_SUCCESS } from "../constants/news.constant";

export const initialState ={
    categoryNews:[]
}
export const newsReducer = (state, action) =>{
   switch (action.type) {
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                news:[...action.payload]
            };
    default:
        break;
   }
}